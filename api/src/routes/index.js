const { Router } = require("express");

const CategoryRouter = require("./RouteCategory.js");
const RouteArticle = require("./RouteArticle.js");
const RouteComment = require("./RouteComment.js");
const userRouter = require("./RouterUser.js");
const deleteRouter = require("./DeleteRouter.js");
const PaymentRouter = require("./RouteCheckout.js");
const defaultRouter = require("./RouteDefault")
const BrandRouter = require("./RouteBrand.js")
const ShoppingRoutes = require("./shopping.js");
const OfferRouter = require("./RouteOffer.js");

const router = Router();

router.use("/", defaultRouter)
router.use("/category", CategoryRouter);
router.use("/article", RouteArticle);
router.use("/comment", RouteComment);
router.use("/user", userRouter);
router.use("/delete", deleteRouter);
router.use("/checkout", PaymentRouter);
router.use("/brand", BrandRouter);
router.use("/myShoppings", ShoppingRoutes);
router.use("/offer", OfferRouter);

module.exports = router;
