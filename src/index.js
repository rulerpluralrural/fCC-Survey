import { loadModalInfo } from "./Modules/InfoModal.js"
import createWebPage from "./Components/CreateWebPage.js";
import createInfoModal from "./Components/CreateInfoModal.js";
import createSurveyOneModal from "./Components/CreateSurveyOneModal.js";
import createSurveyTwoModal from "./Components/CreateSurveyTwoModal.js";
import createSurveyThree from "./Components/CreateSurveyThree.js";
import { buttonEventListener } from "./Modules/App.js";
import './styles.css';

const root = document.querySelector('#root')

window.onload = () => {
    root.appendChild(createWebPage())
        buttonEventListener()
    // root.appendChild(createInfoModal())
    // root.appendChild(createSurveyOneModal())
    // root.appendChild(createSurveyTwoModal())
    // root.appendChild(createSurveyThree())
    // loadModalInfo()
}

