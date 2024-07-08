import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './Columns.css';
import LargeColumn from '../LargeColumn/LargeColumn';
import SmallColumn from '../SmallColumn/SmallColumn';
const Columns = () => {
    return (_jsxs("div", { className: "columns-container", children: [_jsx("div", { className: "column column-large", children: _jsx(LargeColumn, {}) }), _jsx("div", { className: "column column-small", children: _jsx(SmallColumn, {}) })] }));
};
export default Columns;
