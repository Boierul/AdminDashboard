import React from 'react';
import {useTheme} from "@mui/material";
import {ResponsiveLine} from "@nivo/line";

import {tokens} from "../../themes/themes";
import {mockLineData as data} from "../../data/mockData";

function LineChart({isDashboard = false}) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <ResponsiveLine
            data={data}
            theme={{
                /* Code added from https://nivo.rocks/line/ */
                axis: {
                    domain: {
                        line: {
                            stroke: colors.greenAccent[700],
                        },
                    },
                    legend: {
                        text: {
                            fill: colors.greenAccent[200],
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
                crosshair: {
                    line: {
                        stroke: colors.greenAccent[300],
                        strokeWidth: 1,
                    }
                },
                tooltip: {
                    container: {
                        backgroundColor: colors.primary[400]
                    }
                }
            }}
            colors={isDashboard ? {datum: "color"} : {scheme: "nivo"}}
            margin={{top: 10, right: 110, bottom: 50, left: 60}}
            xScale={{type: "point"}}
            yScale={{
                type: "linear",
                min: "auto",
                max: "auto",
                stacked: true,
                reverse: false,
            }}
            yFormat=" >-.2f"
            curve="catmullRom"
            crosshairType="bottom-left"
            axisTop={null}
            axisRight={null}
            axisBottom={{
                orient: "bottom",
                tickSize: 0,
                tickPadding: 10,
                tickRotation: 0,
                legend: isDashboard ? undefined : "Transportation",
                legendOffset: 42,
                legendPosition: "middle",
            }}
            axisLeft={{
                orient: "left",
                tickValues: 5,
                tickSize: 3,
                tickPadding: 5,
                tickRotation: 0,
                legend: isDashboard ? undefined : "Count",
                legendOffset: -50,
                legendPosition: "middle",
            }}
            enableGridX={false}
            enableGridY={false}
            pointSize={8}
            pointColor={{from: 'color', modifiers: []}}
            pointBorderWidth={2}
            pointBorderColor={{from: "serieColor"}}
            pointLabelYOffset={-12}
            useMesh={true}
            tooltip={
                slice => {
                    return (
                        <div>
                            <h2>{slice.id}</h2>
                            {slice.point.map((e, i) => (
                                <p key={i}>
                                    <strong>{e.id}:</strong> {e.value}
                                </p>
                            ))}
                        </div>
                    )
                }
            }
            sliceTooltip={({slice}) => {
                /* Attempt to enable tooltip on:hover div box */
                return (
                    <div
                        style={{
                            background: 'white',
                            padding: '9px 12px',
                            border: '1px solid #ccc',
                        }}
                    >
                        <div>x: {slice.id}</div>
                        {slice.points.map(point => (
                            <div
                                key={point.id}
                                style={{
                                    color: colors.greenAccent[300],
                                    padding: '3px 0',
                                }}
                            >
                                <strong>{point.serieId}</strong> [{point.data.yFormatted}]
                            </div>
                        ))}
                    </div>
                )
            }}
            motionConfig="slow"
            legends={[
                {
                    anchor: "bottom-right",
                    direction: "column",
                    justify: false,
                    translateX: 100,
                    translateY: 0,
                    itemsSpacing: 0,
                    itemDirection: "left-to-right",
                    itemWidth: 70,
                    itemHeight: 20,
                    itemOpacity: 0.75,
                    symbolSize: 12,
                    symbolShape: "circle",
                    symbolBorderColor: colors.primary[200],
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
        />
    );
};

export default LineChart;