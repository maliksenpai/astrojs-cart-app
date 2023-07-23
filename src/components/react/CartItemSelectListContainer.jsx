/* The code is defining a functional component called `CartItemSelectListContainer`. This component
takes in a single prop called `children`. */
const CartItemSelectListContainer = ({ children }) => {
   /* The code is returning a JSX element. It is a div element with the class name "bg-light p-3 mx-2".
   Inside the div, there is an h3 element with the class name "text-center" and the text "Market".
   The {children} is a placeholder that will be replaced with the content passed as children to the
   CartItemSelectListContainer component. */
    return <div className="bg-light p-3 mx-2">
        <h3 className="text-center"> Market </h3>
        {children}
    </div>
}

export default CartItemSelectListContainer;