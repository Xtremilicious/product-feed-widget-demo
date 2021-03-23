**Product Feed Widget** - Swym Task

Problem Statement: The coding assignment is to build a configurable widget plugin that renders based on a given e-commerce catalogue. This widget can be used outside the e-commerce site, like a blog or an email for a given e-commerce store context rendering a product catalogue as a feed within that page. The goal is to make this widget easily embeddable and configurable with minimum steps involved.

Primary dimensions to think along:
1. Allow the user to specify a set of products on each render of the widget.
*Eg: If it is on the blog-page-1, it refers to product-set-1. On blog-page-2, it refers to* product-set-2.
2. Allow the user to configure fields visible/hidden on each product tile (eg: title, price, image, etc.)
3. Allow the user to configure actions available on each product tile (eg: buy now, view now, etc.)
4. Allow the user to “skin” the widget

**Solution** - Documentation

Product Feed Widget Features:
1. Specify a definite set of products to display.
2. Control visibility toggles for the product `title`, `vendor`, `image` and `price`.
3. Control actions invoked for the "Buying/Add to Cart", "View Product", and "Favourite/Like Product".
4. Pass custom styles to change the overall look and feel of the widget items. (currently tested the `background` and `color` attributes)

**Demo**

Deployed Demo: https://product-feed-widget-demo.vercel.app

Mock Data API: https://product-feed-widget-demo.vercel.app/api/data.json

**Getting Started**

Product Feed Widget depends on `react-icons` for rendering like/buy icons in the products.

The Widget lies in the `Widget/Feed` folder in the `src` directory.

**Usage**

    import FeedWidget from "./Widgets/Feed";
    function MyApp() {
    
      //specific set of products as array of objects
      const [items, setItems] = useState([]);
      
      //custom styles
	  const customStyle = {
      background: "",
      color: "",
      };

	  //dummy functions to control the actions (buy, like, view)
	  const dummyAlertBuy = (id) => {
	      alert("Buy Product ID " + id);
      };
      const dummyAlertView = (id) => {
		  alert("View Product ID " + id);
	  };
	  const dummyAlertLike = (id) => {
		  alert("Like Product ID " + id);
	  };
    
	  //title, price, image, vendor can be toggled true/false
      return (
        <div>
          <FeedWidget
            products={items}
            title={true}
            price={true}
            image={true}
            vendor={true}
            style={customStyle}
            onBuy={dummyAlertBuy}
            onView={dummyAlertView}
            onLike={dummyAlertLike}
          />
        </div>
      );
    }
**User Guide:**
**Props:**

| Prop name                   | Description                                                                                                                                                | Default value (when the specific prop is not passed)                                                             | Example values                                                                                                            |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| products                    | Takes in an array of objects to use for the feed of products                                                                                               | []                                                                         | Array of objects with specific attributes.<br> Check out `data.json` file in `public/api`                                 |
| title, price, vendor, image | Toggle visibility of product attributes                                                                                                                    | `true`                                                                     | `true` for enabled, `false` for disabled                                                                                  |
| style                       | Add custom styling to product cards                                                                                                                        | {}                                                                         | Object with js style attributes. <br> `{ background: "black", color: "white"}`                                                     |
| onBuy, OnView, OnLike       | Takes in custom action functions to invoke when the user clicks on the Buy (+ icon), View (click on product image or title), Like actions (click on heart icon) | An alert function with an alert "No action configured for this product ID" | Any custom function that takes in an `id` atribute which the product calls it with. <br> e.g. `function(id){console.log(id)}` |
