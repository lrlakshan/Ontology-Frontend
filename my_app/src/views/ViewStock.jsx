import React from "react";
// react component for creating dynamic tables
import ReactTable from "react-table";
import Helper from '../utils/Helper';
import LoadingOverlay from 'react-loading-overlay';
import SweetAlert from "react-bootstrap-sweetalert";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Tooltip from "@material-ui/core/Tooltip";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// @material-ui/icons
import Search from "@material-ui/icons/Search";
import Assignment from "@material-ui/icons/Assignment";
import ArtTrack from "@material-ui/icons/ArtTrack";
import Refresh from "@material-ui/icons/Refresh";
import Edit from "@material-ui/icons/Edit";
import Place from "@material-ui/icons/Place";
import Dvr from "@material-ui/icons/Dvr";
import AddCircle from "@material-ui/icons/AddCircle";
import LocalMall from "@material-ui/icons/LocalMall";

// core components
import GridContainer from "../components/Grid/GridContainer.jsx";
import GridItem from "../components/Grid/GridItem.jsx";
import Button from "../components/CustomButtons/Button.jsx";
import Card from "../components/Card/Card.jsx";
import CardBody from "../components/Card/CardBody.jsx";
import CardIcon from "../components/Card/CardIcon.jsx";
import CardHeader from "../components/Card/CardHeader.jsx";
import CardFooter from "../components/Card/CardFooter.jsx";
import CustomInput from "../components/CustomInput/CustomInput.jsx";
import NavPills from "../components/NavPills/NavPills.jsx";

import { cardTitle } from "../assets/jss/material-dashboard-pro-react.jsx";
import dashboardStyle from "../assets/jss/material-dashboard-pro-react/views/dashboardStyle";
import sweetAlertStyle from "../assets/jss/material-dashboard-pro-react/views/sweetAlertStyle.jsx";
import extendedFormsStyle from "../assets/jss/material-dashboard-pro-react/views/extendedFormsStyle.jsx";
import extendedTablesStyle from "../assets/jss/material-dashboard-pro-react/views/extendedTablesStyle.jsx";

import priceImage1 from "../assets/img/shirt.jpg";
import priceImage2 from "../assets/img/tshirt.jpg";
import priceImage3 from "../assets/img/trouser.jpg";

const styles = {
    cardIconTitle: {
        ...cardTitle,
        marginTop: "15px",
        marginBottom: "0px"
    },
    marginLeft: {
        marginTop: "15px",
        marginLeft: "25px",
        marginBottom: "0px",
        width: "150px"
    },
    marginCenter: {
        marginTop: "15px",
        marginLeft: "25px",
        marginBottom: "0px",
        width: "150px"
    },  
    cardSize: {
        width: "350px"
    },
    addButton: {
        float: "right"
    },
    ...extendedFormsStyle,
    ...extendedTablesStyle,
    ...sweetAlertStyle,
    ...dashboardStyle
};

class viewStock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            simpleSelectSupplier: "",
            imageSelector: "",
            loading: false,

            searchresult: [],


            simpleSelectMenBrand1: "",
            simpleSelectMenMaterial1: "",
            simpleSelectMenSleeves1: "",
            simpleSelectMenCollarSize1: "",
            simpleSelectMenColor1: "",
            simpleSelectMenFit1: "",

            simpleSelectMenBrand2: "",
            simpleSelectMenMaterial2: "",
            simpleSelectMenSize2: "",
            simpleSelectMenCollarType2: "",
            simpleSelectMenColor2: "",
            simpleSelectMenFit2: "",

            simpleSelectMenBrand3: "",
            simpleSelectMenMaterial3: "",
            simpleSelectMenColor3: "",
            simpleSelectMenPantSize3: "",



            supplierList: [],

            menbrandList1: [],
            menmaterialList1: [],
            mensleevesList1: [],
            mencollarSizeList1: [],
            mencolorList1: [],
            menfitList1: [],

            menbrandList2: [],
            menmaterialList2: [],
            mensizeList2: [],
            mencollarTypeList2: [],
            mencolorList2: [],
            menfitList2: [],

            menbrandList3: [],
            menmaterialList3: [],
            mencolorList3: [],
            menpantSizeList3: [],



            selectedMenBrandName1: "All",
            selectedMenMaterialName1: "All",
            selectedMenSleevesName1: "All",
            selectedMenCollarSizeName1: "All",
            selectedMenColorName1: "All",
            selectedMenFitName1: "All",
            selectedMenpriceFrom1: "0",
            selectedMenPriceTo1: "10000000000000000000000000000000000",

            selectedMenBrandName2: "All",
            selectedMenMaterialName2: "All",
            selectedMenSizeName2: "All",
            selectedMenCollarSizeName2: "All",
            selectedMenColorName2: "All",
            selectedMenFitName2: "All",

            selectedMenBrandName3: "All",
            selectedMenMaterialName3: "All",
            selectedMenColorName3: "All",
            selectedMenPantSizeName3: "All",
        };
    }

    componentDidMount() {
        this.getBrandList();
        this.getMaterialList();
        this.getSleeveslList();
        this.getCollarSizeList();
        this.getColorList();
        this.getFitList();
        this.getSizeList();
        this.getCollarTypeList();
        this.getPantSizeList();
    }



//mens shirt section
    handleSelectedMenBrand1 = event => {
        console.log(event.target.value);
        this.setState({
            [event.target.name]: event.target.value,
            selectedMenBrandName1: event.target.value
        });
    };

    handleSelectedMenMaterial1 = event => {
        console.log(event.target.value);
        this.setState({
            [event.target.name]: event.target.value,
            selectedMenMaterialName1: event.target.value
        });
    };

    handleSelectedMenSleeves1 = event => {
        console.log(event.target.value);
        this.setState({
            [event.target.name]: event.target.value,
            selectedMenSleevesName1: event.target.value
        });
    };

    handleSelectedMenCollarSize1 = event => {
        console.log(event.target.value);
        this.setState({
            [event.target.name]: event.target.value,
            selectedMenCollarSizeName1: event.target.value
        });
    };

    handleSelectedMenColor1 = event => {
        console.log(event.target.value);
        this.setState({
            [event.target.name]: event.target.value,
            selectedMenColorName1: event.target.value
        });
    };

    handleSelectedMenFit1 = event => {
        console.log(event.target.value);
        this.setState({
            [event.target.name]: event.target.value,
            selectedMenFitName1: event.target.value
        });
    };




//mens tshirt section
    handleSelectedMenBrand2 = event => {
        console.log(event.target.value);
        this.setState({
            [event.target.name]: event.target.value,
            selectedMenBrandName2: event.target.value
        });
    };

    handleSelectedMenMaterial2 = event => {
        console.log(event.target.value);
        this.setState({
            [event.target.name]: event.target.value,
            selectedMenMaterialName2: event.target.value
        });
    };

    handleSelectedMenSize2 = event => {
        console.log(event.target.value);
        this.setState({
            [event.target.name]: event.target.value,
            selectedMenSizeName2: event.target.value
        });
    };

    handleSelectedMenCollarType2 = event => {
        console.log(event.target.value);
        this.setState({
            [event.target.name]: event.target.value,
            selectedMenCollarSizeName2: event.target.value
        });
    };

    handleSelectedMenColor2 = event => {
        console.log(event.target.value);
        this.setState({
            [event.target.name]: event.target.value,
            selectedMenColorName2: event.target.value
        });
    };

    handleSelectedMenFit2 = event => {
        console.log(event.target.value);
        this.setState({
            [event.target.name]: event.target.value,
            selectedMenFitName2: event.target.value
        });
    };

    //mens trousers section
    handleSelectedMenBrand3 = event => {
        console.log(event.target.value);
        this.setState({
            [event.target.name]: event.target.value,
            selectedMenBrandName3: event.target.value
        });
    };

    handleSelectedMenMaterial3 = event => {
        console.log(event.target.value);
        this.setState({
            [event.target.name]: event.target.value,
            selectedMenMaterialName3: event.target.value
        });
    };

    handleSelectedMenColor3 = event => {
        console.log(event.target.value);
        this.setState({
            [event.target.name]: event.target.value,
            selectedMenColorName3: event.target.value
        });
    };

    handleSelectedMenPantSize3 = event => {
        console.log(event.target.value);
        this.setState({
            [event.target.name]: event.target.value,
            selectedMenPantSizeName3: event.target.value
        });
    };




    getBrandList = () => {
        const menbrandList1 = [];
        const menbrandList2 = [];
        const menbrandList3 = [];
        Helper.http
            .jsonGet("brand")
            .then(response => {
                let data = response;
                for (let i = 0; i < data.length; i++) {
                    const _data = {
                        id: data[i].id,
                        brandName: data[i].subject.substring(data[i].subject.lastIndexOf("#") + 1, data[i].subject.length),
                    };
                    menbrandList1.push(_data);
                    menbrandList2.push(_data);
                    menbrandList3.push(_data);
                }
                this.setState({ menbrandList1, menbrandList2, menbrandList3 });
            })
            .catch(exception => {
                console.log(exception);
            });
    };

    getMaterialList = () => {
        const menmaterialList1 = [];
        const menmaterialList2= [];
        const menmaterialList3 = [];
        Helper.http
            .jsonGet("material")
            .then(response => {
                let data = response;
                for (let i = 0; i < data.length; i++) {
                    const _data = {
                        id: data[i].id,
                        materialName: data[i].subject.substring(data[i].subject.lastIndexOf("#") + 1, data[i].subject.length),
                    };
                    menmaterialList1.push(_data);
                    menmaterialList2.push(_data);
                    menmaterialList3.push(_data);
                }
                this.setState({ menmaterialList1, menmaterialList2, menmaterialList3 });
            })
            .catch(exception => {
                console.log(exception);
            });
    };

    getSleeveslList = () => {
        const mensleevesList1 = [];
        Helper.http
            .jsonGet("sleeves")
            .then(response => {
                let data = response;
                for (let i = 0; i < data.length; i++) {
                    const _data = {
                        id: data[i].id,
                        sleevesName: data[i].subject.substring(data[i].subject.lastIndexOf("#") + 1, data[i].subject.length),
                    };
                    mensleevesList1.push(_data);
                }
                this.setState({ mensleevesList1,});
            })
            .catch(exception => {
                console.log(exception);
            });
    };

    getCollarSizeList = () => {
        const mencollarSizeList1 = [];
        Helper.http
            .jsonGet("collarsize")
            .then(response => {
                let data = response;
                for (let i = 0; i < data.length; i++) {
                    const _data = {
                        id: data[i].id,
                        collarSizeName: data[i].subject.substring(data[i].subject.lastIndexOf("#") + 1, data[i].subject.length),
                    };
                    mencollarSizeList1.push(_data);
                }
                this.setState({ mencollarSizeList1, });
            })
            .catch(exception => {
                console.log(exception);
            });
    };

    getColorList = () => {
        const mencolorList1 = [];
        const mencolorList2 = [];
        const mencolorList3 = [];
        Helper.http
            .jsonGet("color")
            .then(response => {
                let data = response;
                for (let i = 0; i < data.length; i++) {
                    const _data = {
                        id: data[i].id,
                        colorName: data[i].subject.substring(data[i].subject.lastIndexOf("#") + 1, data[i].subject.length),
                    };
                    mencolorList1.push(_data);
                    mencolorList2.push(_data);
                    mencolorList3.push(_data);
                }
                this.setState({ mencolorList1, mencolorList2, mencolorList3 });
            })
            .catch(exception => {
                console.log(exception);
            });
    };

    getFitList = () => {
        const menfitList1 = [];
        const menfitList2 = [];
        Helper.http
            .jsonGet("fit")
            .then(response => {
                let data = response;
                for (let i = 0; i < data.length; i++) {
                    const _data = {
                        id: data[i].id,
                        fitName: data[i].subject.substring(data[i].subject.lastIndexOf("#") + 1, data[i].subject.length),
                    };
                    menfitList1.push(_data);
                    menfitList2.push(_data);
                }
                this.setState({ menfitList1, menfitList2 });
            })
            .catch(exception => {
                console.log(exception);
            });
    };

    getSizeList = () => {
        const mensizeList2 = [];
        Helper.http
            .jsonGet("clothingsize")
            .then(response => {
                let data = response;
                for (let i = 0; i < data.length; i++) {
                    const _data = {
                        id: data[i].id,
                        sizeName: data[i].subject.substring(data[i].subject.lastIndexOf("#") + 1, data[i].subject.length),
                    };
                    mensizeList2.push(_data);
                }
                this.setState({ mensizeList2, });
            })
            .catch(exception => {
                console.log(exception);
            });
    };

    getCollarTypeList = () => {
        const mencollarTypeList2 = [];
        Helper.http
            .jsonGet("mencollar")
            .then(response => {
                let data = response;
                for (let i = 0; i < data.length; i++) {
                    const _data = {
                        id: data[i].id,
                        collarTypeName: data[i].subject.substring(data[i].subject.lastIndexOf("#") + 1, data[i].subject.length),
                    };
                    mencollarTypeList2.push(_data);
                }
                this.setState({ mencollarTypeList2, });
            })
            .catch(exception => {
                console.log(exception);
            });
    };

    getPantSizeList = () => {
        const menpantSizeList3 = [];
        Helper.http
            .jsonGet("pantsize")
            .then(response => {
                let data = response;
                for (let i = 0; i < data.length; i++) {
                    const _data = {
                        id: data[i].id,
                        pantSizeName: data[i].subject.substring(data[i].subject.lastIndexOf("#") + 1, data[i].subject.length),
                    };
                    menpantSizeList3.push(_data);
                }
                this.setState({ menpantSizeList3, });
            })
            .catch(exception => {
                console.log(exception);
            });
    };




    //mens shirt search on click function
    menShirtSearchBtnClick = () => {
        const searchresult = [];
                this.setState({ tableLoading: true });
                Helper.http
                    .jsonGetSearch("Men_shirts", this.state.selectedMenBrandName1, this.state.selectedMenMaterialName1, this.state.selectedMenSleevesName1, "All", "All", this.state.selectedMenCollarSizeName1, this.state.selectedMenColorName1, this.state.selectedMenFitName1, "All", "All", this.state.selectedMenpriceFrom1, this.state.selectedMenPriceTo1 )
                    .then(response => {
                        let data = response;
                        console.log("came", data);
                        for (let i = 0; i < data.length; i++) {
                            const _data = {
                                id: data[i].id,
                                resultCloth: data[i].Cloth_Model.substring(data[i].Cloth_Model.lastIndexOf("#") + 1, data[i].Cloth_Model.length),
                                price: data[i].price.replace(/(^\d+)(.+$)/i, '$1')
                            };
                            searchresult.push(_data);
                        }
                        this.setState({ searchresult, imageSelector: "shirt" });
                    })
                    .catch(exception => {
                        console.log(exception);
                    });

    }

    //mens T-shirt search on click function
    menTShirtSearchBtnClick = () => {
        const searchresult = [];
        this.setState({ tableLoading: true });
        Helper.http
            .jsonGetSearch("T-shirts", this.state.selectedMenBrandName2, this.state.selectedMenMaterialName2, "All", this.state.selectedMenCollarSizeName2, "All", "All", this.state.selectedMenColorName2, this.state.selectedMenFitName2, this.state.selectedMenSizeName2, "All", this.state.selectedMenpriceFrom1, this.state.selectedMenPriceTo1)
            .then(response => {
                let data = response;
                for (let i = 0; i < data.length; i++) {
                    const _data = {
                        id: data[i].id,
                        resultCloth: data[i].Cloth_Model.substring(data[i].Cloth_Model.lastIndexOf("#") + 1, data[i].Cloth_Model.length),
                        price: data[i].price.replace(/(^\d+)(.+$)/i, '$1')
                    };
                    searchresult.push(_data);
                }
                this.setState({ searchresult, imageSelector: "tshirt" });
            })
            .catch(exception => {
                console.log(exception);
            });

    }

    //mens Trouser search on click function
    menTrouserSearchBtnClick = () => {
        const searchresult = [];
        this.setState({ tableLoading: true });
        Helper.http
            .jsonGetSearch("Gens_trousers", this.state.selectedMenBrandName3, this.state.selectedMenMaterialName3, "All", "All", "All", "All", this.state.selectedMenColorName3, "All", "All", this.state.selectedMenPantSizeName3, this.state.selectedMenpriceFrom1, this.state.selectedMenPriceTo1)
            .then(response => {
                let data = response;
                for (let i = 0; i < data.length; i++) {
                    const _data = {
                        id: data[i].id,
                        resultCloth: data[i].Cloth_Model.substring(data[i].Cloth_Model.lastIndexOf("#") + 1, data[i].Cloth_Model.length),
                        price: data[i].price.replace(/(^\d+)(.+$)/i, '$1')
                    };
                    searchresult.push(_data);
                }
                this.setState({ searchresult, imageSelector: "trouser" });
            })
            .catch(exception => {
                console.log(exception);
            });

    }

    renderSwitch(param) {
        switch (param) {
            case 'shirt':
                return priceImage1;
            case 'tshirt':
                return priceImage2;
            case 'trouser':
                return priceImage3;
            default:
                return 'foo';
        }
    }


    render() {
        const { classes } = this.props;
        return (
            <div>
                <GridContainer>
                    <GridItem xs={12}>
                        <Card>
                            <CardHeader color="primary" icon>
                                <CardIcon color="primary">
                                    <Assignment />
                                </CardIcon>
                                <h4 className={classes.cardIconTitle}>Men's Section</h4>
                            </CardHeader>
                            <CardBody>
                                <NavPills
                                    color="rose"
                                    tabs={[
                                        {
                                            tabButton: "Shirts",
                                            tabContent: (
                                                <span>
                                                    <GridContainer>
                                                        <GridItem xs={12} sm={12} md={6}>
                                                            <GridContainer>
                                                                <GridItem xs={12} sm={12} md={6}>
                                                                    <CardBody>
                                                                        <InputLabel className={classes.label}>Brands</InputLabel>
                                                                        <FormControl
                                                                            fullWidth
                                                                            className={classes.selectFormControl}
                                                                        >
                                                                            <InputLabel
                                                                                htmlFor="simple-selectMenBrand1"
                                                                                className={classes.selectLabel}
                                                                            >Select Brand</InputLabel>
                                                                            <Select
                                                                                MenuProps={{
                                                                                    className: classes.selectMenu
                                                                                }}
                                                                                classes={{
                                                                                    select: classes.select
                                                                                }}
                                                                                value={this.state.simpleSelectMenBrand1}
                                                                                onChange={this.handleSelectedMenBrand1}
                                                                                inputProps={{
                                                                                    name: "simpleSelectMenBrand1",
                                                                                    id: "simple-selectMenBrand1"
                                                                                }}
                                                                            >
                                                                                <MenuItem
                                                                                    // disabled
                                                                                    key="0"
                                                                                    value="All"
                                                                                    classes={{
                                                                                        root: classes.selectMenuItem,
                                                                                        selected: classes.selectMenuItemSelected
                                                                                    }}
                                                                                >
                                                                                    From All Brands
                                                </MenuItem>
                                                                                {this.state.menbrandList1.map((brand, index) =>
                                                                            <MenuItem
                                                                                        key={brand.id}
                                                                                        value={brand.brandName}
                                                                                classes={{
                                                                                    root: classes.selectMenuItem,
                                                                                    selected: classes.selectMenuItemSelected
                                                                                }}
                                                                            >
                                                                                        {brand.brandName}
                                                                            </MenuItem>
                                                                        )}
                                                                            </Select>
                                                                        </FormControl>

                                                                    </CardBody>
                                                                </GridItem>
                                                                <GridItem xs={12} sm={12} md={6}>
                                                                    <CardBody>
                                                                        <InputLabel className={classes.label}>Material</InputLabel>
                                                                        <FormControl
                                                                            fullWidth
                                                                            className={classes.selectFormControl}
                                                                        >
                                                                            <InputLabel
                                                                                htmlFor="simple-selectMenMaterial1"
                                                                                className={classes.selectLabel}
                                                                            >Select Material</InputLabel>
                                                                            <Select
                                                                                MenuProps={{
                                                                                    className: classes.selectMenu
                                                                                }}
                                                                                classes={{
                                                                                    select: classes.select
                                                                                }}
                                                                                value={this.state.simpleSelectMenMaterial1}
                                                                                onChange={this.handleSelectedMenMaterial1}
                                                                                inputProps={{
                                                                                    name: "simpleSelectMenMaterial1",
                                                                                    id: "simple-selectMenMaterial1"
                                                                                }}
                                                                            >
                                                                                <MenuItem
                                                                                    // disabled
                                                                                    key="0"
                                                                                    value="All"
                                                                                    classes={{
                                                                                        root: classes.selectMenuItem,
                                                                                        selected: classes.selectMenuItemSelected
                                                                                    }}
                                                                                >
                                                                                    From All Materials
                                                </MenuItem>
                                                                                {this.state.menmaterialList1.map((material, index) =>
                                                                                    <MenuItem
                                                                                        key={material.id}
                                                                                        value={material.materialName}
                                                                                        classes={{
                                                                                            root: classes.selectMenuItem,
                                                                                            selected: classes.selectMenuItemSelected
                                                                                        }}
                                                                                    >
                                                                                        {material.materialName}
                                                                                    </MenuItem>
                                                                                )}
                                                                            </Select>
                                                                        </FormControl>

                                                                    </CardBody>
                                                                </GridItem>
                                                                <GridItem xs={12} sm={12} md={6}>
                                                                    <CardBody>
                                                                        <InputLabel className={classes.label}>Colour</InputLabel>
                                                                        <FormControl
                                                                            fullWidth
                                                                            className={classes.selectFormControl}
                                                                        >
                                                                            <InputLabel
                                                                                htmlFor="simple-selectMenColor1"
                                                                                className={classes.selectLabel}
                                                                            >Select Colour</InputLabel>
                                                                            <Select
                                                                                MenuProps={{
                                                                                    className: classes.selectMenu
                                                                                }}
                                                                                classes={{
                                                                                    select: classes.select
                                                                                }}
                                                                                value={this.state.simpleSelectMenColor1}
                                                                                onChange={this.handleSelectedMenColor1}
                                                                                inputProps={{
                                                                                    name: "simpleSelectMenColor1",
                                                                                    id: "simple-selectMenColor1"
                                                                                }}
                                                                            >
                                                                                <MenuItem
                                                                                    // disabled
                                                                                    key="0"
                                                                                    value="All"
                                                                                    classes={{
                                                                                        root: classes.selectMenuItem,
                                                                                        selected: classes.selectMenuItemSelected
                                                                                    }}
                                                                                >
                                                                                    From All Colours
                                                </MenuItem>
                                                                                {this.state.mencolorList1.map((color, index) =>
                                                                                    <MenuItem
                                                                                        key={color.id}
                                                                                        value={color.colorName}
                                                                                        classes={{
                                                                                            root: classes.selectMenuItem,
                                                                                            selected: classes.selectMenuItemSelected
                                                                                        }}
                                                                                    >
                                                                                        {color.colorName}
                                                                                    </MenuItem>
                                                                                )}
                                                                            </Select>
                                                                        </FormControl>

                                                                    </CardBody>
                                                                </GridItem>
                                                                <GridItem xs={12} sm={12} md={6}>
                                                                    <CardBody>
                                                                        <InputLabel className={classes.label}>Fit Type</InputLabel>
                                                                        <FormControl
                                                                            fullWidth
                                                                            className={classes.selectFormControl}
                                                                        >
                                                                            <InputLabel
                                                                                htmlFor="simple-selectMenFit1"
                                                                                className={classes.selectLabel}
                                                                            >Select Fit Type</InputLabel> 
                                                                            <Select
                                                                                MenuProps={{
                                                                                    className: classes.selectMenu
                                                                                }}
                                                                                classes={{
                                                                                    select: classes.select
                                                                                }}
                                                                                value={this.state.simpleSelectMenFit1}
                                                                                onChange={this.handleSelectedMenFit1}
                                                                                inputProps={{
                                                                                    name: "simpleSelectMenFit1",
                                                                                    id: "simple-selectMenFit1"
                                                                                }}
                                                                            >
                                                                                <MenuItem
                                                                                    // disabled
                                                                                    key="0"
                                                                                    value="All"
                                                                                    classes={{
                                                                                        root: classes.selectMenuItem,
                                                                                        selected: classes.selectMenuItemSelected
                                                                                    }}
                                                                                >
                                                                                    From All Fit Types
                                                </MenuItem>
                                                                                {this.state.menfitList1.map((fit, index) =>
                                                                                    <MenuItem
                                                                                        key={fit.id}
                                                                                        value={fit.fitName}
                                                                                        classes={{
                                                                                            root: classes.selectMenuItem,
                                                                                            selected: classes.selectMenuItemSelected
                                                                                        }}
                                                                                    >
                                                                                        {fit.fitName}
                                                                                    </MenuItem>
                                                                                )}
                                                                            </Select>
                                                                        </FormControl>

                                                                    </CardBody>
                                                                </GridItem>
                                                            </GridContainer>
                                                        </GridItem>
                                                        <GridItem xs={12} sm={12} md={6}>
                                                            <GridContainer>
                                                                <GridItem xs={12} sm={12} md={6}>
                                                                    <CardBody>
                                                                        <InputLabel className={classes.label}>Sleeves</InputLabel>
                                                                        <FormControl
                                                                            fullWidth
                                                                            className={classes.selectFormControl}
                                                                        >
                                                                            <InputLabel
                                                                                htmlFor="simple-selectMenSleeves1"
                                                                                className={classes.selectLabel}
                                                                            >Select Sleeves</InputLabel>
                                                                            <Select
                                                                                MenuProps={{
                                                                                    className: classes.selectMenu
                                                                                }}
                                                                                classes={{
                                                                                    select: classes.select
                                                                                }}
                                                                                value={this.state.simpleSelectMenSleeves1}
                                                                                onChange={this.handleSelectedMenSleeves1}
                                                                                inputProps={{
                                                                                    name: "simpleSelectMenSleeves1",
                                                                                    id: "simple-selectMenSleeves1"
                                                                                }}
                                                                            >
                                                                                <MenuItem
                                                                                    // disabled
                                                                                    key="0"
                                                                                    value="All"
                                                                                    classes={{
                                                                                        root: classes.selectMenuItem,
                                                                                        selected: classes.selectMenuItemSelected
                                                                                    }}
                                                                                >
                                                                                    From All Sleeves
                                                </MenuItem>
                                                                                {this.state.mensleevesList1.map((sleeves, index) =>
                                                                                    <MenuItem
                                                                                        key={sleeves.id}
                                                                                        value={sleeves.sleevesName}
                                                                                        classes={{
                                                                                            root: classes.selectMenuItem,
                                                                                            selected: classes.selectMenuItemSelected
                                                                                        }}
                                                                                    >
                                                                                        {sleeves.sleevesName}
                                                                                    </MenuItem>
                                                                                )}
                                                                            </Select>
                                                                        </FormControl>

                                                                    </CardBody>
                                                                </GridItem>
                                                                <GridItem xs={12} sm={12} md={6}>
                                                                    <CardBody>
                                                                        <InputLabel className={classes.label}>Collar Size</InputLabel>
                                                                        <FormControl
                                                                            fullWidth
                                                                            className={classes.selectFormControl}
                                                                        >
                                                                            <InputLabel
                                                                                htmlFor="simple-selectMenCollarSize1"
                                                                                className={classes.selectLabel}
                                                                            >Select Collar Size</InputLabel>
                                                                            <Select
                                                                                MenuProps={{
                                                                                    className: classes.selectMenu
                                                                                }}
                                                                                classes={{
                                                                                    select: classes.select
                                                                                }}
                                                                                value={this.state.simpleSelectMenCollarSize1}
                                                                                onChange={this.handleSelectedMenCollarSize1}
                                                                                inputProps={{
                                                                                    name: "simpleSelectMenCollarSize1",
                                                                                    id: "simple-selectMenCollarSize1"
                                                                                }}
                                                                            >
                                                                                <MenuItem
                                                                                    // disabled
                                                                                    key="0"
                                                                                    value="All"
                                                                                    classes={{
                                                                                        root: classes.selectMenuItem,
                                                                                        selected: classes.selectMenuItemSelected
                                                                                    }}
                                                                                >
                                                                                    From All Collar Sizes
                                                </MenuItem>
                                                                                {this.state.mencollarSizeList1.map((collarSize, index) =>
                                                                                    <MenuItem
                                                                                        key={collarSize.id}
                                                                                        value={collarSize.collarSizeName}
                                                                                        classes={{
                                                                                            root: classes.selectMenuItem,
                                                                                            selected: classes.selectMenuItemSelected
                                                                                        }}
                                                                                    >
                                                                                        {collarSize.collarSizeName}
                                                                                    </MenuItem>
                                                                                )}
                                                                            </Select>
                                                                        </FormControl>

                                                                    </CardBody>
                                                                </GridItem>
                                                                <GridItem xs={12} sm={12} md={6}>

                                                                </GridItem>
                                                                <GridItem xs={12} sm={12} md={6}>
                                                                    <CardBody>
                                                                        <br />
                                                                        <Button color="success" className={classes.marginCenter} onClick={this.menShirtSearchBtnClick}>
                                                                            <Search className={classes.icons} /> Search
                                        </Button>

                                                                    </CardBody>
                                                                </GridItem>
                                                            </GridContainer>
                                                        </GridItem>
                                                    </GridContainer>
                                                </span>
                                            )
                                        },
                                        {
                                            tabButton: "T-SHIRTS",
                                            tabContent: (
                                                <span>
                                                    <GridContainer>
                                                        <GridItem xs={12} sm={12} md={6}>
                                                            <GridContainer>
                                                                <GridItem xs={12} sm={12} md={6}>
                                                                    <CardBody>
                                                                        <InputLabel className={classes.label}>Brands</InputLabel>
                                                                        <FormControl
                                                                            fullWidth
                                                                            className={classes.selectFormControl}
                                                                        >
                                                                            <InputLabel
                                                                                htmlFor="simple-menselectBrand2"
                                                                                className={classes.selectLabel}
                                                                            >Select Brand</InputLabel>
                                                                            <Select
                                                                                MenuProps={{
                                                                                    className: classes.selectMenu
                                                                                }}
                                                                                classes={{
                                                                                    select: classes.select
                                                                                }}
                                                                                value={this.state.simpleSelectMenBrand2}
                                                                                onChange={this.handleSelectedMenBrand2}
                                                                                inputProps={{
                                                                                    name: "simpleSelectMenBrand2",
                                                                                    id: "simple-menselectBrand2"
                                                                                }}
                                                                            >
                                                                                <MenuItem
                                                                                    // disabled
                                                                                    key="0"
                                                                                    value="All"
                                                                                    classes={{
                                                                                        root: classes.selectMenuItem,
                                                                                        selected: classes.selectMenuItemSelected
                                                                                    }}
                                                                                >
                                                                                    From All Brands
                                                </MenuItem>
                                                                                {this.state.menbrandList2.map((brand, index) =>
                                                                                    <MenuItem
                                                                                        key={brand.id}
                                                                                        value={brand.brandName}
                                                                                        classes={{
                                                                                            root: classes.selectMenuItem,
                                                                                            selected: classes.selectMenuItemSelected
                                                                                        }}
                                                                                    >
                                                                                        {brand.brandName}
                                                                                    </MenuItem>
                                                                                )}
                                                                            </Select>
                                                                        </FormControl>

                                                                    </CardBody>
                                                                </GridItem>
                                                                <GridItem xs={12} sm={12} md={6}>
                                                                    <CardBody>
                                                                        <InputLabel className={classes.label}>Material</InputLabel>
                                                                        <FormControl
                                                                            fullWidth
                                                                            className={classes.selectFormControl}
                                                                        >
                                                                            <InputLabel
                                                                                htmlFor="simple-selectMenMaterial2"
                                                                                className={classes.selectLabel}
                                                                            >Select Material</InputLabel>
                                                                            <Select
                                                                                MenuProps={{
                                                                                    className: classes.selectMenu
                                                                                }}
                                                                                classes={{
                                                                                    select: classes.select
                                                                                }}
                                                                                value={this.state.simpleSelectMenMaterial2}
                                                                                onChange={this.handleSelectedMenMaterial2}
                                                                                inputProps={{
                                                                                    name: "simpleSelectMenMaterial2",
                                                                                    id: "simple-selectMenMaterial2"
                                                                                }}
                                                                            >
                                                                                <MenuItem
                                                                                    // disabled
                                                                                    key="0"
                                                                                    value="All"
                                                                                    classes={{
                                                                                        root: classes.selectMenuItem,
                                                                                        selected: classes.selectMenuItemSelected
                                                                                    }}
                                                                                >
                                                                                    From All Materials
                                                </MenuItem>
                                                                                {this.state.menmaterialList2.map((material, index) =>
                                                                                    <MenuItem
                                                                                        key={material.id}
                                                                                        value={material.materialName}
                                                                                        classes={{
                                                                                            root: classes.selectMenuItem,
                                                                                            selected: classes.selectMenuItemSelected
                                                                                        }}
                                                                                    >
                                                                                        {material.materialName}
                                                                                    </MenuItem>
                                                                                )}
                                                                            </Select>
                                                                        </FormControl>

                                                                    </CardBody>
                                                                </GridItem>
                                                                <GridItem xs={12} sm={12} md={6}>
                                                                    <CardBody>
                                                                        <InputLabel className={classes.label}>Colour</InputLabel>
                                                                        <FormControl
                                                                            fullWidth
                                                                            className={classes.selectFormControl}
                                                                        >
                                                                            <InputLabel
                                                                                htmlFor="simple-selectMenColor2"
                                                                                className={classes.selectLabel}
                                                                            >Select Colour</InputLabel>
                                                                            <Select
                                                                                MenuProps={{
                                                                                    className: classes.selectMenu
                                                                                }}
                                                                                classes={{
                                                                                    select: classes.select
                                                                                }}
                                                                                value={this.state.simpleSelectMenColor2}
                                                                                onChange={this.handleSelectedMenColor2}
                                                                                inputProps={{
                                                                                    name: "simpleSelectMenColor2",
                                                                                    id: "simple-selectMenColor2"
                                                                                }}
                                                                            >
                                                                                <MenuItem
                                                                                    // disabled
                                                                                    key="0"
                                                                                    value="All"
                                                                                    classes={{
                                                                                        root: classes.selectMenuItem,
                                                                                        selected: classes.selectMenuItemSelected
                                                                                    }}
                                                                                >
                                                                                    From All Colours
                                                </MenuItem>
                                                                                {this.state.mencolorList2.map((color, index) =>
                                                                                    <MenuItem
                                                                                        key={color.id}
                                                                                        value={color.colorName}
                                                                                        classes={{
                                                                                            root: classes.selectMenuItem,
                                                                                            selected: classes.selectMenuItemSelected
                                                                                        }}
                                                                                    >
                                                                                        {color.colorName}
                                                                                    </MenuItem>
                                                                                )}
                                                                            </Select>
                                                                        </FormControl>

                                                                    </CardBody>
                                                                </GridItem>
                                                                <GridItem xs={12} sm={12} md={6}>
                                                                    <CardBody>
                                                                        <InputLabel className={classes.label}>Fit Type</InputLabel>
                                                                        <FormControl
                                                                            fullWidth
                                                                            className={classes.selectFormControl}
                                                                        >
                                                                            <InputLabel
                                                                                htmlFor="simple-selectMenFit2"
                                                                                className={classes.selectLabel}
                                                                            >Select Fit Type</InputLabel>
                                                                            <Select
                                                                                MenuProps={{
                                                                                    className: classes.selectMenu
                                                                                }}
                                                                                classes={{
                                                                                    select: classes.select
                                                                                }}
                                                                                value={this.state.simpleSelectMenFit2}
                                                                                onChange={this.handleSelectedMenFit2}
                                                                                inputProps={{
                                                                                    name: "simpleSelectMenFit2",
                                                                                    id: "simple-selectMenFit2"
                                                                                }}
                                                                            >
                                                                                <MenuItem
                                                                                    // disabled
                                                                                    key="0"
                                                                                    value="All"
                                                                                    classes={{
                                                                                        root: classes.selectMenuItem,
                                                                                        selected: classes.selectMenuItemSelected
                                                                                    }}
                                                                                >
                                                                                    From All Fit Types
                                                </MenuItem>
                                                                                {this.state.menfitList2.map((fit, index) =>
                                                                                    <MenuItem
                                                                                        key={fit.id}
                                                                                        value={fit.fitName}
                                                                                        classes={{
                                                                                            root: classes.selectMenuItem,
                                                                                            selected: classes.selectMenuItemSelected
                                                                                        }}
                                                                                    >
                                                                                        {fit.fitName}
                                                                                    </MenuItem>
                                                                                )}
                                                                            </Select>
                                                                        </FormControl>

                                                                    </CardBody>
                                                                </GridItem>
                                                            </GridContainer>
                                                        </GridItem>
                                                        <GridItem xs={12} sm={12} md={6}>
                                                            <GridContainer>
                                                                <GridItem xs={12} sm={12} md={6}>
                                                                    <CardBody>
                                                                        <InputLabel className={classes.label}>Size</InputLabel>
                                                                        <FormControl
                                                                            fullWidth
                                                                            className={classes.selectFormControl}
                                                                        >
                                                                            <InputLabel
                                                                                htmlFor="simple-selectMenSize2"
                                                                                className={classes.selectLabel}
                                                                            >Select Size</InputLabel>
                                                                            <Select
                                                                                MenuProps={{
                                                                                    className: classes.selectMenu
                                                                                }}
                                                                                classes={{
                                                                                    select: classes.select
                                                                                }}
                                                                                value={this.state.simpleSelectMenSize2}
                                                                                onChange={this.handleSelectedMenSize2}
                                                                                inputProps={{
                                                                                    name: "simpleSelectMenSize2",
                                                                                    id: "simple-selectMenSize2"
                                                                                }}
                                                                            >
                                                                                <MenuItem
                                                                                    // disabled
                                                                                    key="0"
                                                                                    value="All"
                                                                                    classes={{
                                                                                        root: classes.selectMenuItem,
                                                                                        selected: classes.selectMenuItemSelected
                                                                                    }}
                                                                                >
                                                                                    From All Sizes
                                                </MenuItem>
                                                                                {this.state.mensizeList2.map((size, index) =>
                                                                                    <MenuItem
                                                                                        key={size.id}
                                                                                        value={size.sizeName}
                                                                                        classes={{
                                                                                            root: classes.selectMenuItem,
                                                                                            selected: classes.selectMenuItemSelected
                                                                                        }}
                                                                                    >
                                                                                        {size.sizeName}
                                                                                    </MenuItem>
                                                                                )}
                                                                            </Select>
                                                                        </FormControl>

                                                                    </CardBody>
                                                                </GridItem>
                                                                <GridItem xs={12} sm={12} md={6}>
                                                                    <CardBody>
                                                                        <InputLabel className={classes.label}>Collar Type</InputLabel>
                                                                        <FormControl
                                                                            fullWidth
                                                                            className={classes.selectFormControl}
                                                                        >
                                                                            <InputLabel
                                                                                htmlFor="simple-selectMenCollarType2"
                                                                                className={classes.selectLabel}
                                                                            >Select Collar Type</InputLabel>
                                                                            <Select
                                                                                MenuProps={{
                                                                                    className: classes.selectMenu
                                                                                }}
                                                                                classes={{
                                                                                    select: classes.select
                                                                                }}
                                                                                value={this.state.simpleSelectMenCollarType2}
                                                                                onChange={this.handleSelectedMenCollarType2}
                                                                                inputProps={{
                                                                                    name: "simpleSelectMenCollarType2",
                                                                                    id: "simple-selectMenCollarType2"
                                                                                }}
                                                                            >
                                                                                <MenuItem
                                                                                    // disabled
                                                                                    key="0"
                                                                                    value="All"
                                                                                    classes={{
                                                                                        root: classes.selectMenuItem,
                                                                                        selected: classes.selectMenuItemSelected
                                                                                    }}
                                                                                >
                                                                                    From All Collar Types
                                                </MenuItem>
                                                                                {this.state.mencollarTypeList2.map((collarType, index) =>
                                                                                    <MenuItem
                                                                                        key={collarType.id}
                                                                                        value={collarType.collarTypeName}
                                                                                        classes={{
                                                                                            root: classes.selectMenuItem,
                                                                                            selected: classes.selectMenuItemSelected
                                                                                        }}
                                                                                    >
                                                                                        {collarType.collarTypeName}
                                                                                    </MenuItem>
                                                                                )}
                                                                            </Select>
                                                                        </FormControl>

                                                                    </CardBody>
                                                                </GridItem>
                                                                <GridItem xs={12} sm={12} md={6}>

                                                                </GridItem>
                                                                <GridItem xs={12} sm={12} md={6}>
                                                                    <CardBody>
                                                                        <br />
                                                                        <Button color="success" className={classes.marginCenter} onClick={this.menTShirtSearchBtnClick}>
                                                                            <Search className={classes.icons} /> Search
                                        </Button>

                                                                    </CardBody>
                                                                </GridItem>
                                                            </GridContainer>
                                                        </GridItem>
                                                    </GridContainer>
                                        </span>
                                            )
                                        },
                                        {
                                            tabButton: "TROUSERS",
                                            tabContent: (
                                                <span>
                                                    <GridContainer>
                                                        <GridItem xs={12} sm={12} md={6}>
                                                            <GridContainer>
                                                                <GridItem xs={12} sm={12} md={6}>
                                                                    <CardBody>
                                                                        <InputLabel className={classes.label}>Brands</InputLabel>
                                                                        <FormControl
                                                                            fullWidth
                                                                            className={classes.selectFormControl}
                                                                        >
                                                                            <InputLabel
                                                                                htmlFor="simple-selectMenBrand3"
                                                                                className={classes.selectLabel}
                                                                            >Select Brand</InputLabel>
                                                                            <Select
                                                                                MenuProps={{
                                                                                    className: classes.selectMenu
                                                                                }}
                                                                                classes={{
                                                                                    select: classes.select
                                                                                }}
                                                                                value={this.state.simpleSelectMenBrand3}
                                                                                onChange={this.handleSelectedMenBrand3}
                                                                                inputProps={{
                                                                                    name: "simpleSelectMenBrand3",
                                                                                    id: "simple-selectMenBrand3"
                                                                                }}
                                                                            >
                                                                                <MenuItem
                                                                                    // disabled
                                                                                    key="0"
                                                                                    value="All"
                                                                                    classes={{
                                                                                        root: classes.selectMenuItem,
                                                                                        selected: classes.selectMenuItemSelected
                                                                                    }}
                                                                                >
                                                                                    From All Brands
                                                </MenuItem>
                                                                                {this.state.menbrandList3.map((brand, index) =>
                                                                                    <MenuItem
                                                                                        key={brand.id}
                                                                                        value={brand.brandName}
                                                                                        classes={{
                                                                                            root: classes.selectMenuItem,
                                                                                            selected: classes.selectMenuItemSelected
                                                                                        }}
                                                                                    >
                                                                                        {brand.brandName}
                                                                                    </MenuItem>
                                                                                )}
                                                                            </Select>
                                                                        </FormControl>

                                                                    </CardBody>
                                                                </GridItem>
                                                                <GridItem xs={12} sm={12} md={6}>
                                                                    <CardBody>
                                                                        <InputLabel className={classes.label}>Material</InputLabel>
                                                                        <FormControl
                                                                            fullWidth
                                                                            className={classes.selectFormControl}
                                                                        >
                                                                            <InputLabel
                                                                                htmlFor="simple-selectMenMaterial3"
                                                                                className={classes.selectLabel}
                                                                            >Select Material</InputLabel>
                                                                            <Select
                                                                                MenuProps={{
                                                                                    className: classes.selectMenu
                                                                                }}
                                                                                classes={{
                                                                                    select: classes.select
                                                                                }}
                                                                                value={this.state.simpleSelectMenMaterial3}
                                                                                onChange={this.handleSelectedMenMaterial3}
                                                                                inputProps={{
                                                                                    name: "simpleSelectMenMaterial3",
                                                                                    id: "simple-selectMenMaterial3"
                                                                                }}
                                                                            >
                                                                                <MenuItem
                                                                                    // disabled
                                                                                    key="0"
                                                                                    value="All"
                                                                                    classes={{
                                                                                        root: classes.selectMenuItem,
                                                                                        selected: classes.selectMenuItemSelected
                                                                                    }}
                                                                                >
                                                                                    From All Materials
                                                </MenuItem>
                                                                                {this.state.menmaterialList3.map((material, index) =>
                                                                                    <MenuItem
                                                                                        key={material.id}
                                                                                        value={material.materialName}
                                                                                        classes={{
                                                                                            root: classes.selectMenuItem,
                                                                                            selected: classes.selectMenuItemSelected
                                                                                        }}
                                                                                    >
                                                                                        {material.materialName}
                                                                                    </MenuItem>
                                                                                )}
                                                                            </Select>
                                                                        </FormControl>

                                                                    </CardBody>
                                                                </GridItem>
                                                                
                                                                
                                                            </GridContainer>
                                                        </GridItem>
                                                        <GridItem xs={12} sm={12} md={6}>
                                                            <GridContainer>
                                                                <GridItem xs={12} sm={12} md={6}>
                                                                    <CardBody>
                                                                        <InputLabel className={classes.label}>Size</InputLabel>
                                                                        <FormControl
                                                                            fullWidth
                                                                            className={classes.selectFormControl}
                                                                        >
                                                                            <InputLabel
                                                                                htmlFor="simple-selectMenPantSize3"
                                                                                className={classes.selectLabel}
                                                                            >Select Size</InputLabel>
                                                                            <Select
                                                                                MenuProps={{
                                                                                    className: classes.selectMenu
                                                                                }}
                                                                                classes={{
                                                                                    select: classes.select
                                                                                }}
                                                                                value={this.state.simpleSelectMenPantSize3}
                                                                                onChange={this.handleSelectedMenPantSize3}
                                                                                inputProps={{
                                                                                    name: "simpleSelectMenPantSize3",
                                                                                    id: "simple-selectMenPantSize3"
                                                                                }}
                                                                            >
                                                                                <MenuItem
                                                                                    // disabled
                                                                                    key="0"
                                                                                    value="All"
                                                                                    classes={{
                                                                                        root: classes.selectMenuItem,
                                                                                        selected: classes.selectMenuItemSelected
                                                                                    }}
                                                                                >
                                                                                    From All Sizes
                                                </MenuItem>
                                                                                {this.state.menpantSizeList3.map((size, index) =>
                                                                                    <MenuItem
                                                                                        key={size.id}
                                                                                        value={size.pantSizeName}
                                                                                        classes={{
                                                                                            root: classes.selectMenuItem,
                                                                                            selected: classes.selectMenuItemSelected
                                                                                        }}
                                                                                    >
                                                                                        {size.pantSizeName}
                                                                                    </MenuItem>
                                                                                )}
                                                                            </Select>
                                                                        </FormControl>

                                                                    </CardBody>
                                                                </GridItem>
                                                                <GridItem xs={12} sm={12} md={6}>
                                                                    <CardBody>
                                                                        <InputLabel className={classes.label}>Colour</InputLabel>
                                                                        <FormControl
                                                                            fullWidth
                                                                            className={classes.selectFormControl}
                                                                        >
                                                                            <InputLabel
                                                                                htmlFor="simple-selectMenColor3"
                                                                                className={classes.selectLabel}
                                                                            >Select Colour</InputLabel>
                                                                            <Select
                                                                                MenuProps={{
                                                                                    className: classes.selectMenu
                                                                                }}
                                                                                classes={{
                                                                                    select: classes.select
                                                                                }}
                                                                                value={this.state.simpleSelectMenColor3}
                                                                                onChange={this.handleSelectedMenColor3}
                                                                                inputProps={{
                                                                                    name: "simpleSelectMenColor3",
                                                                                    id: "simple-selectMenColor3"
                                                                                }}
                                                                            >
                                                                                <MenuItem
                                                                                    // disabled
                                                                                    key="0"
                                                                                    value="All"
                                                                                    classes={{
                                                                                        root: classes.selectMenuItem,
                                                                                        selected: classes.selectMenuItemSelected
                                                                                    }}
                                                                                >
                                                                                    From All Colours
                                                </MenuItem>
                                                                                {this.state.mencolorList3.map((color, index) =>
                                                                                    <MenuItem
                                                                                        key={color.id}
                                                                                        value={color.colorName}
                                                                                        classes={{
                                                                                            root: classes.selectMenuItem,
                                                                                            selected: classes.selectMenuItemSelected
                                                                                        }}
                                                                                    >
                                                                                        {color.colorName}
                                                                                    </MenuItem>
                                                                                )}
                                                                            </Select>
                                                                        </FormControl>

                                                                    </CardBody>
                                                                </GridItem>
                                                                <GridItem xs={12} sm={12} md={6}>

                                                                </GridItem>
                                                                <GridItem xs={12} sm={12} md={6}>
                                                                    <CardBody>
                                                                        <br />
                                                                        <Button color="success" className={classes.marginCenter} onClick={this.menTrouserSearchBtnClick}>
                                                                            <Search className={classes.icons} /> Search
                                        </Button>

                                                                    </CardBody>
                                                                </GridItem>
                                                            </GridContainer>
                                                        </GridItem>
                                                    </GridContainer>
                                                </span>
                                            )
                                        },
                                    ]}
                                />
                            </CardBody>
                        </Card>
                    </GridItem>
                </GridContainer>
                <h3>Search Results</h3>
                <br />
                <GridContainer>
                    {this.state.searchresult.length === 0 ? <h4>"No Results Found"</h4> : 
                        this.state.searchresult.map((result, index) =>
                        <GridItem xs={12} sm={12} md={4} key={result.id}>
                            <Card product className={classes.cardHover}>
                                <CardHeader image className={classes.cardHeaderHover}>
                                    <a href="#pablo" onClick={e => e.preventDefault()}>
                                        <img src={this.renderSwitch(this.state.imageSelector)} alt="..." />
                                    </a>
                                </CardHeader>
                                <CardBody>
                                    <h4 className={classes.cardProductTitle}>
                                        <a href="#pablo" onClick={e => e.preventDefault()}>
                                            {result.resultCloth}
                  </a>
                                    </h4>
                                </CardBody>
                                <CardFooter product>
                                    <div className={classes.price}>
                                        <h4>Rs. {result.price}.00</h4>
                                    </div>
                                </CardFooter>
                            </Card>
                        </GridItem>
                    )}
                    
                </GridContainer>

            </div>
        );
    }
}

export default withStyles(styles)(viewStock);
