import { loadModalInfo } from "./Modules/InfoModal.js"
import createInfoModal from "./Components/CreateInfoModal.js";
import createSurveyModal from "./Components/CreateSurveyModal.js";
import './styles.css';

const root = document.querySelector('#root')

window.onload = () => {
    root.appendChild(createInfoModal())
    root.appendChild(createSurveyModal())
    loadModalInfo()
}

