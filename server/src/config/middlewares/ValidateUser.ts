const jwt = require('jsonwebtoken');

import Utility from '../../controller/_helper/utility';
import UserBusiness = require('../../app/business/user/UserBussiness');

class ValidateUser {
    static auth(req: any, res: any, next: any) {
        const authorizationHeaader = req.headers.authorization;

        if (authorizationHeaader) {
            // const token = req.headers.authorization.split(' ')[1];
            const token = req.headers.authorization;
            const options = { expiresIn: '1d', issuer: 'myProject' };

            try {
                jwt.verify(token, 'Bhushan', options, (error: any, result: any) => {
                    if (error) {
                        return res.send(Utility.generateResponse(401, error, false, null));
                    }

                    let userBusiness = new UserBusiness();
                    userBusiness.findByToken(token, (error, result) => {
                        if (error) {
                            return res.send(Utility.generateResponse(401, error, false, null));
                        } else {
                            if (result) {
                                req.user = result;
                                next();
                            } else {
                                return res.send(Utility.generateResponse(401, "Token expired", false, null));
                            }
                        }
                    });
                });
            } catch (error) {
                throw new Error(error);
            }
        } else {
            res.status(401).send(Utility.generateResponse(401, "Authentication Error : Token required", false, null));
        }
    }
}

Object.seal(ValidateUser);
export = ValidateUser;


