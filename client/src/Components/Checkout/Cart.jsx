import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React from "react";
import Bag from "./Bag";
import styles from "./cart.module.css";

const Cart = () => {
  return (
    <div>
      <Tabs
        align="center"
        colorScheme={"green"}
        size="sm"
        className={styles.chakraTab}
      >
        <TabList>
          <Tab>BAG</Tab>
          <p>_ _ _ _ _</p>
          <Tab>ADDRESS</Tab>
          <p>_ _ _ _ _</p>
          <Tab>PAYMENT</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Bag />
          </TabPanel>
          <TabPanel>2</TabPanel>
          <TabPanel>3</TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default Cart;
