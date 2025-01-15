
const CartModal =( {setIsOpen, children} ) => {

    const closeModal = e => {
        if (e.target.classList.contains('overlay')) {
            setIsOpen(false)
        }
    }
    return (
        <div className='cart_modal'>
            <div className='overlay_cart_modal' onClick={closeModal}>{children}</div>
        </div>
    )
}

export default CartModal