import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import ReactPDF from "@react-pdf/renderer";

const styles = StyleSheet.create({
  heading: {
    fontWeight: "ultrabold",
  },
  smallHeading: {
    fontWeight: "ultrabold",
  },
});

const resumeDocument = ({ name, skills, education, misc }) => {
  <Document>
    <Page size={"A4"}>
      <View style={styles.heading}>
        <Text>{name}</Text>
      </View>
      <View style={styles.smallHeading}>
        <Text>Skills:</Text>
      </View>
      <View>
        <Text>{skills}</Text>
      </View>
      <View style={styles.smallHeading}>
        <Text>Education:</Text>
      </View>
      <View>
        <Text>{education}</Text>
      </View>
      <View style={styles.smallHeading}>
        <Text>Misc:</Text>
      </View>
      <View>
        <Text>{misc}</Text>
      </View>
    </Page>
  </Document>;
};

const getPDF = () => {
        ReactPDF.render(<resumeDocument />)
}

export default getPDF;