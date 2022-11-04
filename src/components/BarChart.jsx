import React from 'react';
import {useTheme} from "@mui/material";
import {ResponsiveBar} from "@nivo/bar";
import {tokens} from "../themes/themes";
import {mockBarData as data} from "../data/mockData";

function BarChart({isDashboard = false}) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <ResponsiveBar
            data={data}
            theme={{
                /* Code added from https://nivo.rocks/bar/ */
                axis: {
                    domain: {
                        line: {
                            stroke: colors.greenAccent[700],
                        },
                    },
                    legend: {
                        text: {
                            fill: colors.greenAccent[300],
                        },
                    },
                    ticks: {
                        line: {
                            stroke: colors.greenAccent[300],
                            strokeWidth: 1,
                        },
                        text: {
                            fill: colors.greenAccent[300],
                        },
                    },
                },
                legends: {
                    text: {
                        fill: colors.greenAccent[200],
                    },
                },
                tooltip: {
                    container: {
                        backgroundColor: colors.primary[400]
                    }
                }
            }}
            keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
            indexBy="country"
            margin={{top: 0, right: 170, bottom: 70, left: 120}}
            padding={0.25}
            valueScale={{type: "linear"}}
            indexScale={{type: "band", round: true}}
            colors={{scheme: "nivo"}}
            defs={[
                {
                    id: "dots",
                    type: "patternDots",
                    background: "inherit",
                    color: "#38bcb2",
                    size: 4,
                    padding: 1,
                    stagger: true,
                },
                {
                    id: "lines",
                    type: "patternLines",
                    background: "inherit",
                    color: "#eed312",
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10,
                },
            ]}
            borderColor={{
                from: "color",
                modifiers: [["darker", "1.6"]],
            }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: isDashboard ? undefined : "Country",
                legendPosition: "middle",
                legendOffset: 45,
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: isDashboard ? undefined : "Food",
                legendPosition: "middle",
                legendOffset: -60,
            }}
            enableLabel={false}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{
                from: "color",
                modifiers: [["darker", 1.6]],
            }}
            legends={[
                {
                    dataFrom: "keys",
                    anchor: "bottom-right",
                    direction: "column",
                    justify: false,
                    translateX: 120,
                    translateY: 0,
                    itemsSpacing: 2,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemDirection: "left-to-right",
                    itemOpacity: 0.85,
                    symbolSize: 20,
                    effects: [
                        {
                            on: "hover",
                            style: {
                                itemOpacity: 1,
                            },
                        },
                    ],
                },
            ]}
            motionConfig="wobbly"
            role="application"
            barAriaLabel={function (e) {
                return e.id + ": " + e.formattedValue + " in country: " + e.indexValue;
            }}
        />
    );
}

export default BarChart;