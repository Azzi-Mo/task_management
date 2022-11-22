import { Routes, Route, Link } from "react-router-dom";
function Sidebar() {
  return (
    <>
        <div>
          <ul>
              <Link to='/Products'>
                Get all Product
              </Link>
          </ul>
          <ul>
            <Link>Get all Gategories</Link>
          </ul>
        </div>
    </>
  );
}
export default Sidebar;
