import { StyleSheet, Font } from '@react-pdf/renderer';
import font from './Oxygen-Regular.ttf';
console.log(font);

Font.register({ family: 'Oxygen', src: font });
// Font.register({ family: 'Oxygen', src: "https://github.com/google/fonts/raw/master/ofl/oxygen/Oxygen-Regular.ttf" });

const style = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: 'white',
        color: "black",
        position: "relative",
        width: "100%",
        height: "100%"
    },
    pageContainer: {
        flexDirection: 'row',
        width: "100%",
        height: "100%",
        position: "relative"
    },
    header: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 50,
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: "center",
        textTransform: 'uppercase',
    },
    headerTitle: {
        textTransform: "uppercase",
        letterSpacing: 3,
        fontSize: 25,
        fontWeight: 100
    },
    headerSubtitle: {
        textTransform: "uppercase",
        letterSpacing: 3,
        fontSize: 13,
        fontWeight: 100,
        marginTop: 10
    },
    sideSection: {
        flexGrow: .2,
        paddingTop: 160,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#f7f7f7',
        width: "20%",
        fontSize: 9
    },
    sideSectionCategory: {
        marginBottom: 10
    },
    sideSectionCategoryTitle: {
        letterSpacing: 1,
        textTransform: 'uppercase',
        borderBottomColor: "black",
        borderBottomStyle: "solid",
        borderBottomWidth: 1,
        marginBottom: 8,
        fontSize: 11
    },
    sideSectionCategoryItem: {
        marginBottom: 7
    },
    mainSection: {
        flexGrow: .7,
        marginTop: 147,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        fontSize: 13,
        width: "70%"
    },
    mainSectionCategory: {
        marginBottom: 10
    },
    mainSectionCategoryTitle: {
        letterSpacing: 1,
        textTransform: "uppercase",
        marginBottom: 7,
        borderBottomColor: "black",
        borderBottomStyle: "solid",
        borderBottomWidth: 1
    },
    mainSectionCategoryItem: {
        fontSize: 11,
        lineHeight: 1.3,
    },
    link: {
        color: "blue"
    },
    courseDetails: {
        display: "flex",
        flexDirection: "row",
        fontSize: 11,
        marginTop: 2,
        marginBottom: 2
    },
    course: {
        marginLeft: 10,
        marginBottom: 10
    },
    slash: {
        marginLeft: 5,
        marginRight: 5
    },
    courseDescription: {
        fontSize: 11,
        marginLeft: 8,
    },
    coursesDisclaimer: {
        fontSize: 9,
        marginBottom: 5,
        marginLeft: 10
    },
    marginRight: {
        marginRight: 5,
        borderRight: "1px solid black"
    },
    udemyLogo: {
        height: 11,
        marginRight: 4
    },
    projectTitle: {
        fontSize: 13,
        marginTop: -2
    },
    stack: {
        marginLeft: 12,
        flexDirection: "row",
        fontSize: 10
    },
    reactLogo: {
        height: 10,
        marginRight: 2
    },
    gitHub: {
        marginLeft: 12,
        fontSize: 10,
        flexDirection: "row"
    },
    project: {
        marginBottom: 7
    },
    extraNote: {
        fontSize: 11,
        fontStyle: "italic",
        textAlign: "center"
    }
});

export { style as default };