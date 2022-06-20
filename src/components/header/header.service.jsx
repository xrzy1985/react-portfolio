import constants from '../../state/constants.json';
import './header.css';

const HeaderService = {
    getImgDetails: () => { return {alt: "", size: constants["header-img-size"], url: constants["random-photo-url"]}; }
};

export default HeaderService;