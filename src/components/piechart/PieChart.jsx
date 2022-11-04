import React from 'react';
import {useTheme} from "@mui/material";
import { ResponsivePie } from "@nivo/pie";

import {tokens} from "../../themes/themes";
import {mockPieData as data} from "../../data/mockData";


function PieChart() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <ResponsivePie
            data={data}
            theme={{
                /* Code added from https://nivo.rocks/pie/ */
                axis: {
                    domain: {
                        line: {
                            stroke: colors.primary[100],
                        },
                    },
                    legend: {
                        text: {
                            fill: colors.primary[100],
                        },
                    },
                    ticks: {
                        line: {
                            stroke: colors.primary[100],
                            strokeWidth: 1,
                        },
                        text: {
                            fill: colors.primary[100],
                        },
                    },
                },
                legends: {
                    text: {
                        fill: colors.primary[100],
                    },
                },
                tooltip: {
                    container: {
                        backgroundColor: colors.primary[400]
                    }
                }
            }}
            margin={{ top: 20, right: 80, bottom: 80, left: 80 }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            borderColor={{
                from: "color",
                modifiers: [["darker", 0.2]],
            }}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor={colors.primary[100]}
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: "color" }}
            enableArcLabels={false}
            arcLabelsRadiusOffset={0.4}
            arcLabelsSkipAngle={7}
            arcLabelsTextColor={{
                from: "color",
                modifiers: [["darker", 2]],
            }}
            defs={[
                {
                    id: "dots",
                    type: "patternDots",
                    background: "inherit",
                    color: "rgba(255, 255, 255, 0.3)",
                    size: 4,
                    padding: 1,
                    stagger: true,
                },
                {
                    id: "lines",
                    type: "patternLines",
                    background: "inherit",
                    color: "rgba(255, 255, 255, 0.3)",
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10,
                },
            ]}
            motionConfig="slow"
            legends={[
                {
                    anchor: "bottom",
                    direction: "row",
                    justify: false,
                    translateX: 0,
                    translateY: 56,
                    itemsSpacing: 0,
                    itemWidth: 100,
                    itemHeight: 18,
                    itemTextColor: "#999",
                    itemDirection: "left-to-right",
                    itemOpacity: 1,
                    symbolSize: 18,
                    symbolShape: "circle",
                    effects: [
                        {
                            on: "hover",
                            style: {
                                itemTextColor: colors.greenAccent[500],
                            },
                        },
                    ],
                },
            ]}
        />
    );
};

export default PieChart;
