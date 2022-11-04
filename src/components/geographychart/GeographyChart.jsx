import React from 'react';
import {useTheme} from "@mui/material";
import {ResponsiveChoropleth} from "@nivo/geo";

import {tokens} from "../../themes/themes";
import {mockGeographyData as data} from "../../data/mockData";
import {geoFeatures} from "../../data/mockGeoFeatures";


function GeographyChart({isDashboard = false}) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (<ResponsiveChoropleth
        data={data}
        /* Code added from https://nivo.rocks/choropleth/ */
        theme={{
            axis: {
                domain: {
                    line: {
                        stroke: colors.primary[100],
                    },
                }, legend: {
                    text: {
                        fill: colors.primary[100],
                    },
                }, ticks: {
                    line: {
                        stroke: colors.primary[100], strokeWidth: 1,
                    }, text: {
                        fill: colors.primary[100],
                    },
                },
            }, legends: {
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
        features={geoFeatures.features}
        margin={{top: 0, right: 0, bottom: 0, left: 0}}
        domain={[0, 1000000]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        projectionScale={isDashboard ? 45 : 125}
        projectionTranslation={isDashboard ? [0.45, 0.63] : [0.5, 0.65]}
        projectionRotation={[350, 0, 0]}
        borderWidth={1.5}
        borderColor={colors.blueAccent[700]}
        legends={!isDashboard ? [{
            anchor: "bottom-left",
            direction: "column",
            justify: true,
            translateX: 60,
            translateY: -100,
            itemsSpacing: 0,
            itemWidth: 94,
            itemHeight: 18,
            itemDirection: "left-to-right",
            itemTextColor: colors.greenAccent[100],
            itemOpacity: 0.85,
            symbolSize: 18,
            effects: [{
                on: "hover", style: {
                    itemTextColor: "#ffffff", itemOpacity: 1,
                },
            },],
        },] : undefined}
    />);
}

export default GeographyChart;