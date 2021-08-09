//import MenuBar from "./MenuBar/Menubar";
import { Divider } from "semantic-ui-react";
import { Container } from "semantic-ui-react";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD"
};

const Layout = props => <Container>{props.children}</Container>;

export default Layout;

// {/* <MenuBar /> */}
// <div>
//   {/* <Divider fitted />
//     <style jsx>{`
//       &&& {
//         margin-bottom: 14px !important;
//       }
//     `}</style> */}
// </div>
