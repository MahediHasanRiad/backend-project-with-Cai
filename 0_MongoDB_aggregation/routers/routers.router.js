import { Router } from "express";
import { userController } from "../controllers/user.controller.js";
import { removeAllUser } from "../controllers/delete-user.controller.js";
import { authorController } from "../controllers/author.controller.js";
import { booksController } from "../controllers/books.controller.js";
import { isActiveController } from "../controllers/aggregations/isActive.controller.js";
import { avarageController } from "../controllers/aggregations/avarage.controller.js";
import { topFavouriteFrouit } from "../controllers/aggregations/top-favourite.controller.js";
import { totalPerson } from "../controllers/aggregations/total-person.controller.js";
import { highestNumberOfRegisterUser } from "../controllers/aggregations/highest-number.controller.js";
import { uniqueEyeColorController } from "../controllers/aggregations/unique-eye-color.controller.js";
import { avarageNumberOfTags, avarageNumberOfTags2 } from "../controllers/aggregations/avarage-number-of-tags.controller.js";
import { findSomeTagUser } from "../controllers/aggregations/find-some-tag-user.controller.js";
import { filterUserController } from "../controllers/aggregations/filter-user.controller.js";
import { findMobileNumber } from "../controllers/aggregations/find-mobile-number.controller.js";
import { recentRegisteredUser } from "../controllers/aggregations/recent-registered.controller.js";
import { filterByFavouriteFoodController } from "../controllers/aggregations/filter-by-favourite-food.controller.js";
import { filterBySecondIndex } from "../controllers/aggregations/filter-by-second-index.controller.js";
import { filterByMatchItems } from "../controllers/aggregations/filter-by-match-items.controller.js";
import { filterByLocationController } from "../controllers/aggregations/filter-by-location.controller.js";

const allRouter = Router();

allRouter.route("/user").post(userController);
allRouter.route('/removeAllUser').get(removeAllUser)
allRouter.route('/author').post(authorController)
allRouter.route('/books').post(booksController)


// aggregation
allRouter.route('/active-user').get(isActiveController)
allRouter.route('/avarage-age').get(avarageController)
allRouter.route('/favourite-food').get(topFavouriteFrouit)
allRouter.route('/total-person').get(totalPerson)
allRouter.route('/highest-register-user').get(highestNumberOfRegisterUser)
allRouter.route('/unique-eye-color').get(uniqueEyeColorController)
allRouter.route('/avarage-number-of-tags').get(avarageNumberOfTags2)
allRouter.route('/find-some-tag-user').get(findSomeTagUser)
allRouter.route('/filter-user').get(filterUserController)
allRouter.route('/filter-by-number').get(findMobileNumber)
allRouter.route('/recent-registered').get(recentRegisteredUser)
allRouter.route('/filter-by-food').get(filterByFavouriteFoodController)
allRouter.route('/filter-by-second-index').get(filterBySecondIndex)
allRouter.route('/filter-by-match-items').get(filterByMatchItems)
allRouter.route('/filter-by-location').get(filterByLocationController)



export { allRouter };
