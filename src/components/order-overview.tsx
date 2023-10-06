"use client"
import {useAppContext} from "@/providers/context-provider";
import OrderItem from "@/components/order-item";

export default function OrderOverview() {
    const {state, dispatch} = useAppContext()

    const items = Array.from(state.cart.values())
        .map((cartItem) => <OrderItem key={cartItem.id} id={cartItem.id}/>)

    return (
        <section className="order-overview">
            <div className="order-block">
                <div className="order-header-wrap">
                    <h2 className="order-header">Your Order</h2>
                    <span className="order-edit"
                          onClick={() => dispatch({type: "mode", mode: "storefront"})}>Edit</span>
                </div>
                <div className="order-items">
                    {items}
                </div>
            </div>
            <div className="order-text-field-wrap">
                    <textarea
                        className="order-text-field order-block"
                        rows={1}
                        placeholder="Add comment…"
                    ></textarea>
                <div className="order-text-field-hint">
                    Any special requests, details, final wishes etc.
                </div>
            </div>
        </section>
    )
}
