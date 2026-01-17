import { Router } from "express";
import { userController } from "../controllers/user.controller.js";
import { removeAllUser } from "../controllers/delete-user.controller.js";
import { authorController } from "../controllers/author.controller.js";
import { booksController } from "../controllers/books.controller.js";
import { isActiveController } from "../controllers/aggregations/isActive.controller.js";
import { avarageController } from "../controllers/aggregations/avarage.controller.js";
import { topFavouriteFrouit } from "../controllers/aggregations/top-favourite.controller.js";

const allRouter = Router();

allRouter.route("/user").post(userController);
allRouter.route('/removeAllUser').get(removeAllUser)

allRouter.route('/author').post(authorController)
allRouter.route('/books').post(booksController)

// aggregation
allRouter.route('/active-user').get(isActiveController)
allRouter.route('/avarage-age').get(avarageController)
allRouter.route('/favourite-food').get(topFavouriteFrouit)

export { allRouter };
