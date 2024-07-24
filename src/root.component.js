import * as singleSpa from "single-spa";

export default function Root(props) {
  return <section>{props.name} is mounted!
  <button onClick={()=>{
    singleSpa.navigateToUrl("/");
  }}>go to dash</button>
  <button onClick={()=>{
    singleSpa.navigateToUrl("/app2");
  }}>go to app2</button></section>;
}
