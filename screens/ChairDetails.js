import React from 'react';

const ChairDetails = ({route}) => {
  const [chairbrands , setChairbrands] = React.useState(null);
  const [orderItems, setOrderItems] = React.useState([]);
  React.useEffect(() => {
    let { item } = route.params;

    setChairbrands (item)
});

}

export default ChairDetails;