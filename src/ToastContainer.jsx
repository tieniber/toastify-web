//import "../node_modules/react-toastify/dist/ReactToastify.css";
import "./ui/ToastContainer.css";
import { Component, createElement } from "react";
import { ToastContainer as ToastifyContainer, toast } from "react-toastify";

export default class ToastContainer extends Component {
    componentDidMount() {
        window.toast = toast;
    }

    render() {
        return <ToastifyContainer />;
    }
}
