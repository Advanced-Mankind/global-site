const React = require("react");
const Layout = require("./src/components/layout");
// Logs when the client route changes
exports.onRouteUpdate = ({ location, prevLocation }) => {
  console.log("new pathname", location.pathname);
  console.log("old pathname", prevLocation ? prevLocation.pathname : null);
};
// // Wraps every page in a component
// exports.wrapPageElement = ({ element, props }) => {
//   return <Layout>{element}</Layout>;
// };
// in gastby-browser.js
exports.shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  const { pathname } = location;
  // list of routes for the scroll-to-top-hook
  const scrollToTopRoutes = [`/Case-Studies`, `/Our-Approach`];
  // if the new route is part of the list above, scroll to top (0, 0)
  window.scrollTo(0, 0);

  return false;
};
