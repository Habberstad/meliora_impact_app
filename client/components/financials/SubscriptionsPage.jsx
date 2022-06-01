export const SubscriptionPage = (props) => {

  return(
    <div>
      <h1>Subscription Page</h1>
      <div>
        {props.user.active_subscriptions.map( (item) =>(
          <div>{item.npo_id}</div>
        ))}
      </div>
    </div>

  )
};