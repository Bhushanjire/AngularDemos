import IReadController = require("../comman/ReadController");
import IWriteController = require("../comman/WriteController");
import IBaseBusiness = require("../../../app/business/interfaces/base");
interface BaseController<T extends IBaseBusiness<any>> extends IReadController, IWriteController{
    
    
} 
export = BaseController;