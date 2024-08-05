import React, {useState} from 'react';
import './Desserts.scss'
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import Happy from "../Happy/Happy";
import DessertsTop from "../../Menu/Desserts/DessertsTop";
import HoTDrinks from "../../Menu/Desserts/HoTDrinks";
import ColdDrinks from "../../Menu/Desserts/Cold Drinks";
import Foods from "../../Menu/Desserts/Foods";
import Cuisine from "../../Menu/Desserts/cuisine";
import FastFoodsT from "../../Menu/Desserts/Fast foodsT";

const Desserts = () => {


    return (
        <div id='desserts'>
            <div className="container">
                <div className='desserts'>
                    <Tabs style={{
                        display:'flex',
                        alignItems:'start'
                    }}>
                        <TabList>
                            <div className='desserts--block'>
                                <Tab className='desserts--block__top'>
                                    <h4>Desserts</h4>
                                    <div className='desserts--block__top--lina'></div>
                                </Tab>
                                <Tab className='desserts--block__top'>
                                    <h4>Hot Drinks</h4>
                                    <div className='desserts--block__top--lina'></div>
                                </Tab>
                                <Tab className='desserts--block__top'>
                                    <h4>Cold Drinks</h4>
                                    <div className='desserts--block__top--lina'></div>
                                </Tab>
                                <Tab className='desserts--block__top'>
                                    <h4>National Foods</h4>
                                    <div className='desserts--block__top--lina'></div>
                                </Tab>
                                <Tab className='desserts--block__top'>
                                    <h4>Eastern cuisine</h4>
                                    <div className='desserts--block__top--lina'></div>
                                </Tab>
                                <Tab className='desserts--block__top'>
                                <h4>Fast foods</h4>
                                <div className='desserts--block__top--lina'></div>
                            </Tab>
                            </div>
                        </TabList>
                      <TabPanel>
                          <DessertsTop/>
                      </TabPanel>
                        <TabPanel>
                          <HoTDrinks/>
                      </TabPanel>
                        <TabPanel>
                            <ColdDrinks/>
                        </TabPanel>
                        <TabPanel>
                            <Foods/>
                        </TabPanel>
                        <TabPanel>
                            <Cuisine/>
                        </TabPanel>
                        <TabPanel>
                            <FastFoodsT/>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default Desserts;