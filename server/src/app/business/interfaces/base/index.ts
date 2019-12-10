import Read = require('../comman/Read');
import Write = require('../comman/Write');
interface BaseBusiness<T> extends Read<T>, Write<T> {
}
export = BaseBusiness;