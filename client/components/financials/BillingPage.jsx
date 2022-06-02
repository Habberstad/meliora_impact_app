import { Button } from "@mui/material";


export const BillingPage = (props) => {
  const user = props.user

  return (
    <div>
      <h1>Billing</h1>

      <div>
        <h3>Payment method</h3>

        <label>Current</label>
        <p>{user.payment_option}</p>
        <Button>Change</Button>
      </div>


      <div>
        <h3>Subscription type</h3>

        <label>Current</label>
        <p>{user.subscription_type}</p>
        <Button>Change</Button>
      </div>

    </div>
  )

}