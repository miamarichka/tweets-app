/** @format */
import { Circles } from "react-loader-spinner";

export const Loader = () => {
  return (
    <Circles
      height='500'
      width='500'
      color='#EBD8FF'
      ariaLabel='circles-loading'
      wrapperStyle={{'justifyContent': 'center'}}
      wrapperClass=''
      visible={true}
    />
  );
};
