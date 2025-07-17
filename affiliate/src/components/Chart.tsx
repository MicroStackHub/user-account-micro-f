import React, { useEffect, useState, useRef } from 'react';

interface ChartData {
    label: string;
    value: number;
    color?: string;
}

interface ChartProps {
    type: 'line' | 'bar' | 'pie' | 'area' | 'donut';
    data: ChartData[];
    title?: string;
    height?: number;
    className?: string;
    subtitle?: string;
    showLegend?: boolean;
    showTooltip?: boolean;
    showValue?: boolean;
    showGridLines?: boolean;
    theme?: 'light' | 'dark' | 'colorful';
}

const Chart: React.FC<ChartProps> = ({
    type,
    data,
    title,
    height = 300,
    className = '',
    subtitle,
    showLegend = true,
    showTooltip = true,
    showValue = true,
    showGridLines = true,
    theme = 'light'
}) => {
    const [animated, setAnimated] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const chartRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Trigger animation after component mounts
        const timer = setTimeout(() => setAnimated(true), 100);
        return () => clearTimeout(timer);
    }, []);

    // Get theme colors
    const getThemeColors = () => {
        switch (theme) {
            case 'dark':
                return {
                    background: '#1F2937',
                    text: '#F9FAFB',
                    grid: '#374151',
                    colors: ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#06B6D4', '#EC4899']
                };
            case 'colorful':
                return {
                    background: '#FFFFFF',
                    text: '#111827',
                    grid: '#E5E7EB',
                    colors: ['#8B5CF6', '#EC4899', '#F97316', '#FACC15', '#10B981', '#06B6D4', '#3B82F6']
                };
            default: // light
                return {
                    background: '#FFFFFF',
                    text: '#111827',
                    grid: '#E5E7EB',
                    colors: ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#06B6D4', '#EC4899']
                };
        }
    };

    const themeColors = getThemeColors();

    const maxValue = Math.max(...data.map(d => d.value));
    const colors = themeColors.colors;

    // Calculate animation progress (0 to 1)
    const animationProgress = animated ? 1 : 0;

    // Tooltip handling
    const handleMouseEnter = (index: number) => {
        if (showTooltip) {
            setHoveredIndex(index);
        }
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    // Format value for display
    const formatValue = (value: number): string => {
        if (value >= 1000000) {
            return `${(value / 1000000).toFixed(1)}M`;
        } else if (value >= 1000) {
            return `${(value / 1000).toFixed(1)}K`;
        }
        return value.toString();
    };

    const renderLineChart = () => {
        const width = 100;
        const chartHeight = height - 60;
        const padding = 5; // Add padding for better visualization

        // Calculate points with animation
        const points = data.map((item, index) => {
            const x = padding + ((index / (data.length - 1)) * (width - 2 * padding));
            const y = chartHeight - (item.value / maxValue) * chartHeight * animationProgress;
            return `${x},${y}`;
        }).join(' ');

        return (
            <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full">
                {/* Background */}
                <rect x="0" y="0" width={width} height={height} fill={themeColors.background} rx="2" ry="2" />

                {/* Grid lines */}
                {showGridLines && [0.2, 0.4, 0.6, 0.8].map((ratio, i) => (
                    <line
                        key={i}
                        x1={padding}
                        y1={chartHeight - (chartHeight * ratio)}
                        x2={width - padding}
                        y2={chartHeight - (chartHeight * ratio)}
                        stroke={themeColors.grid}
                        strokeWidth="0.2"
                        strokeDasharray="1,1"
                    />
                ))}

                {/* Y-axis values */}
                {showValue && [0.2, 0.4, 0.6, 0.8, 1].map((ratio, i) => (
                    <text
                        key={i}
                        x={padding - 1}
                        y={chartHeight - (chartHeight * ratio) + 1}
                        textAnchor="start"
                        fontSize="2.5"
                        fill={themeColors.text}
                        opacity="0.7"
                    >
                        {formatValue(maxValue * ratio)}
                    </text>
                ))}

                {/* Line */}
                <polyline
                    points={points}
                    fill="none"
                    stroke={colors[0]}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="drop-shadow-sm transition-all duration-300"
                />

                {/* Area under the line */}
                <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={colors[0]} stopOpacity="0.2" />
                    <stop offset="100%" stopColor={colors[0]} stopOpacity="0.05" />
                </linearGradient>
                <polygon
                    points={`${padding},${chartHeight} ${points} ${width - padding},${chartHeight}`}
                    fill="url(#lineGradient)"
                    className="transition-all duration-500"
                />

                {/* Data points */}
                {data.map((item, index) => {
                    const x = padding + ((index / (data.length - 1)) * (width - 2 * padding));
                    const y = chartHeight - (item.value / maxValue) * chartHeight;
                    return (
                        <g key={index}>
                            <circle
                                cx={x}
                                cy={y}
                                r="1.5"
                                fill={colors[0]}
                                stroke={themeColors.background}
                                strokeWidth="0.5"
                                className="drop-shadow-sm transition-all duration-300"
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                            />

                            {/* Tooltip */}
                            {hoveredIndex === index && (
                                <g>
                                    <rect
                                        x={x - 10}
                                        y={y - 15}
                                        width="20"
                                        height="10"
                                        rx="1"
                                        ry="1"
                                        fill={themeColors.text}
                                        opacity="0.9"
                                    />
                                    <text
                                        x={x}
                                        y={y - 8}
                                        textAnchor="middle"
                                        fontSize="3"
                                        fill={themeColors.background}
                                        fontWeight="bold"
                                    >
                                        {formatValue(item.value)}
                                    </text>
                                    <polygon
                                        points={`${x - 2},${y - 5} ${x},${y - 3} ${x + 2},${y - 5}`}
                                        fill={themeColors.text}
                                        opacity="0.9"
                                    />
                                </g>
                            )}
                        </g>
                    );
                })}

                {/* X-axis labels */}
                {data.map((item, index) => {
                    const x = padding + ((index / (data.length - 1)) * (width - 2 * padding));
                    return (
                        <text
                            key={index}
                            x={x}
                            y={height - 10}
                            textAnchor="middle"
                            fontSize="2.5"
                            fill={themeColors.text}
                            opacity="0.7"
                        >
                            {item.label}
                        </text>
                    );
                })}
            </svg>
        );
    };

    const renderBarChart = () => {
        const barWidth = 100 / (data.length * 2);
        const chartHeight = height - 60;
        const padding = 5; // Add padding for better visualization
        // const effectiveWidth = width - 2 * padding;

        return (
            <svg viewBox={`0 0 100 ${height}`} className="w-full h-full">
                {/* Background */}
                <rect x="0" y="0" width="100" height={height} fill={themeColors.background} rx="2" ry="2" />

                {/* Grid lines */}
                {showGridLines && [0.2, 0.4, 0.6, 0.8].map((ratio, i) => (
                    <line
                        key={i}
                        x1={padding}
                        y1={chartHeight - (chartHeight * ratio)}
                        x2={100 - padding}
                        y2={chartHeight - (chartHeight * ratio)}
                        stroke={themeColors.grid}
                        strokeWidth="0.2"
                        strokeDasharray="1,1"
                    />
                ))}

                {/* Y-axis values */}
                {showValue && [0.2, 0.4, 0.6, 0.8, 1].map((ratio, i) => (
                    <text
                        key={i}
                        x={padding - 1}
                        y={chartHeight - (chartHeight * ratio) + 1}
                        textAnchor="start"
                        fontSize="2.5"
                        fill={themeColors.text}
                        opacity="0.7"
                    >
                        {formatValue(maxValue * ratio)}
                    </text>
                ))}

                {/* Bars */}
                {data.map((item, index) => {
                    const barHeight = (item.value / maxValue) * chartHeight * animationProgress;
                    const x = padding + (index / data.length) * (100 - 2 * padding) + barWidth / 2;
                    const barColor = item.color || colors[index % colors.length];

                    return (
                        <g key={index}>
                            {/* Bar shadow */}
                            <defs>
                                <linearGradient id={`barGradient-${index}`} x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor={barColor} stopOpacity="1" />
                                    <stop offset="100%" stopColor={barColor} stopOpacity="0.7" />
                                </linearGradient>
                            </defs>

                            {/* Bar */}
                            <rect
                                x={x}
                                y={chartHeight - barHeight}
                                width={barWidth}
                                height={barHeight}
                                fill={`url(#barGradient-${index})`}
                                rx="1.2"
                                className="drop-shadow-sm hover:brightness-110 transition-all duration-300"
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                            />

                            {/* Label */}
                            <text
                                x={x + barWidth / 2}
                                y={height - 10}
                                textAnchor="middle"
                                fontSize="2.5"
                                fill={themeColors.text}
                                opacity="0.7"
                            >
                                {item.label}
                            </text>

                            {/* Value on top of bar */}
                            {showValue && (
                                <text
                                    x={x + barWidth / 2}
                                    y={chartHeight - barHeight - 2}
                                    textAnchor="middle"
                                    fontSize="2.5"
                                    fill={themeColors.text}
                                    opacity="0.9"
                                    fontWeight="bold"
                                >
                                    {formatValue(item.value)}
                                </text>
                            )}

                            {/* Tooltip */}
                            {hoveredIndex === index && (
                                <g>
                                    <rect
                                        x={x - 10}
                                        y={chartHeight - barHeight - 15}
                                        width="20"
                                        height="10"
                                        rx="1"
                                        ry="1"
                                        fill={themeColors.text}
                                        opacity="0.9"
                                    />
                                    <text
                                        x={x + barWidth / 2}
                                        y={chartHeight - barHeight - 8}
                                        textAnchor="middle"
                                        fontSize="3"
                                        fill={themeColors.background}
                                        fontWeight="bold"
                                    >
                                        {formatValue(item.value)}
                                    </text>
                                    <polygon
                                        points={`${x + barWidth / 2 - 2},${chartHeight - barHeight - 5} ${x + barWidth / 2},${chartHeight - barHeight - 3} ${x + barWidth / 2 + 2},${chartHeight - barHeight - 5}`}
                                        fill={themeColors.text}
                                        opacity="0.9"
                                    />
                                </g>
                            )}
                        </g>
                    );
                })}
            </svg>
        );
    };

    const renderPieChart = () => {
        const total = data.reduce((sum, item) => sum + item.value, 0);
        const radius = 35;
        const centerX = 50;
        const centerY = 45;

        let startAngle = 0;
        const slices = data.map((item, index) => {
            const percentage = item.value / total;
            const angle = percentage * 360;
            const endAngle = startAngle + angle;

            // Convert angles to radians for calculations
            const startRad = (startAngle * Math.PI) / 180;
            const endRad = (endAngle * Math.PI) / 180;

            // Calculate the two points on the arc
            const x1 = centerX + radius * Math.cos(startRad);
            const y1 = centerY + radius * Math.sin(startRad);
            const x2 = centerX + radius * Math.cos(endRad);
            const y2 = centerY + radius * Math.sin(endRad);

            // Determine if the arc should be drawn as a large arc
            const largeArcFlag = angle > 180 ? 1 : 0;

            // Create the SVG path
            const path = [
                `M ${centerX} ${centerY}`,
                `L ${x1} ${y1}`,
                `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`,
                'Z'
            ].join(' ');

            // Calculate position for the label
            const labelRad = (startRad + endRad) / 2;
            const labelDistance = radius * 0.7;
            const labelX = centerX + labelDistance * Math.cos(labelRad);
            const labelY = centerY + labelDistance * Math.sin(labelRad);

            // Update the start angle for the next slice
            startAngle = endAngle;

            return {
                path,
                color: item.color || colors[index % colors.length],
                label: item.label,
                value: item.value,
                percentage,
                labelX,
                labelY,
                startAngle: startAngle - angle,
                endAngle
            };
        });

        return (
            <svg viewBox="0 0 100 100" className="w-full h-full">
                {/* Background */}
                <rect x="0" y="0" width="100" height="100" fill={themeColors.background} rx="2" ry="2" />

                {/* Pie slices with hover effect */}
                <g className="transform transition-transform duration-300 hover:scale-105">
                    {slices.map((slice, index) => {
                        // Calculate a slightly larger radius for hover effect
                        const hoverRadius = radius * 1.05;
                        const midAngle = (slice.startAngle + slice.endAngle) / 2 * Math.PI / 180;
                        const hoverX = centerX + Math.cos(midAngle) * 2;
                        const hoverY = centerY + Math.sin(midAngle) * 2;

                        return (
                            <path
                                key={index}
                                d={slice.path}
                                fill={slice.color}
                                stroke={themeColors.background}
                                strokeWidth="0.5"
                                className="drop-shadow-md transition-all duration-300 hover:brightness-110"
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                                transform={hoveredIndex === index ? `translate(${hoverX - centerX}, ${hoverY - centerY})` : ''}
                            />
                        );
                    })}
                </g>

                {/* Center text showing total */}
                <text
                    x={centerX}
                    y={centerY}
                    textAnchor="middle"
                    fontSize="6"
                    fontWeight="bold"
                    fill={themeColors.text}
                    className="select-none"
                >
                    {formatValue(total)}
                </text>
                <text
                    x={centerX}
                    y={centerY + 5}
                    textAnchor="middle"
                    fontSize="3"
                    fill={themeColors.text}
                    opacity="0.7"
                    className="select-none"
                >
                    Total
                </text>

                {/* Tooltip */}
                {hoveredIndex !== null && (
                    <g>
                        <rect
                            x="50"
                            y="10"
                            width="40"
                            height="12"
                            rx="2"
                            ry="2"
                            fill={themeColors.text}
                            opacity="0.9"
                        />
                        <text
                            x="70"
                            y="15"
                            textAnchor="middle"
                            fontSize="3.5"
                            fontWeight="bold"
                            fill={themeColors.background}
                        >
                            {slices[hoveredIndex].label}
                        </text>
                        <text
                            x="70"
                            y="19"
                            textAnchor="middle"
                            fontSize="3"
                            fill={themeColors.background}
                        >
                            {formatValue(slices[hoveredIndex].value)} ({Math.round(slices[hoveredIndex].percentage * 100)}%)
                        </text>
                    </g>
                )}

                {/* Legend */}
                {showLegend && (
                    <g transform="translate(0, 100)">
                        {slices.map((slice, index) => (
                            <g
                                key={index}
                                transform={`translate(10, ${index * 6 - 30})`}
                                className="transition-opacity duration-200"
                                style={{ opacity: hoveredIndex === null || hoveredIndex === index ? 1 : 0.5 }}
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <rect
                                    width="4"
                                    height="4"
                                    fill={slice.color}
                                    rx="1"
                                    className="transition-all duration-300"
                                />
                                <text
                                    x="6"
                                    y="3"
                                    fontSize="3"
                                    fill={themeColors.text}
                                    className="transition-all duration-300"
                                >
                                    {slice.label} ({Math.round(slice.percentage * 100)}%)
                                </text>
                            </g>
                        ))}
                    </g>
                )}
            </svg>
        );
    };

    const renderAreaChart = () => {
        const width = 100;
        const chartHeight = height - 60;
        const padding = 5; // Add padding for better visualization

        // Calculate points with animation
        const points = data.map((item, index) => {
            const x = padding + ((index / (data.length - 1)) * (width - 2 * padding));
            const y = chartHeight - (item.value / maxValue) * chartHeight * animationProgress;
            return `${x},${y}`;
        }).join(' ');

        // Create the area by adding points at the bottom corners
        const areaPoints = [
            `${padding},${chartHeight}`,
            points,
            `${width - padding},${chartHeight}`
        ].join(' ');

        return (
            <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full">
                {/* Background */}
                <rect x="0" y="0" width={width} height={height} fill={themeColors.background} rx="2" ry="2" />

                {/* Grid lines */}
                {showGridLines && [0.2, 0.4, 0.6, 0.8].map((ratio, i) => (
                    <line
                        key={i}
                        x1={padding}
                        y1={chartHeight - (chartHeight * ratio)}
                        x2={width - padding}
                        y2={chartHeight - (chartHeight * ratio)}
                        stroke={themeColors.grid}
                        strokeWidth="0.2"
                        strokeDasharray="1,1"
                    />
                ))}

                {/* Y-axis values */}
                {showValue && [0.2, 0.4, 0.6, 0.8, 1].map((ratio, i) => (
                    <text
                        key={i}
                        x={padding - 1}
                        y={chartHeight - (chartHeight * ratio) + 1}
                        textAnchor="start"
                        fontSize="2.5"
                        fill={themeColors.text}
                        opacity="0.7"
                    >
                        {formatValue(maxValue * ratio)}
                    </text>
                ))}

                {/* Area */}
                <polygon
                    points={areaPoints}
                    fill="url(#areaGradient)"
                    className="transition-all duration-500"
                />

                {/* Gradient definition */}
                <defs>
                    <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={colors[0]} stopOpacity="0.5" />
                        <stop offset="100%" stopColor={colors[0]} stopOpacity="0.05" />
                    </linearGradient>
                </defs>

                {/* Line */}
                <polyline
                    points={points}
                    fill="none"
                    stroke={colors[0]}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="drop-shadow-sm transition-all duration-300"
                />

                {/* Data points */}
                {data.map((item, index) => {
                    const x = padding + ((index / (data.length - 1)) * (width - 2 * padding));
                    const y = chartHeight - (item.value / maxValue) * chartHeight;
                    return (
                        <g key={index}>
                            <circle
                                cx={x}
                                cy={y}
                                r="1.5"
                                fill={colors[0]}
                                stroke={themeColors.background}
                                strokeWidth="0.5"
                                className="drop-shadow-sm transition-all duration-300"
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                            />

                            {/* Tooltip */}
                            {hoveredIndex === index && (
                                <g>
                                    <rect
                                        x={x - 10}
                                        y={y - 15}
                                        width="20"
                                        height="10"
                                        rx="1"
                                        ry="1"
                                        fill={themeColors.text}
                                        opacity="0.9"
                                    />
                                    <text
                                        x={x}
                                        y={y - 8}
                                        textAnchor="middle"
                                        fontSize="3"
                                        fill={themeColors.background}
                                        fontWeight="bold"
                                    >
                                        {formatValue(item.value)}
                                    </text>
                                    <polygon
                                        points={`${x - 2},${y - 5} ${x},${y - 3} ${x + 2},${y - 5}`}
                                        fill={themeColors.text}
                                        opacity="0.9"
                                    />
                                </g>
                            )}
                        </g>
                    );
                })}

                {/* X-axis labels */}
                {data.map((item, index) => {
                    const x = padding + ((index / (data.length - 1)) * (width - 2 * padding));
                    return (
                        <text
                            key={index}
                            x={x}
                            y={height - 10}
                            textAnchor="middle"
                            fontSize="2.5"
                            fill={themeColors.text}
                            opacity="0.7"
                        >
                            {item.label}
                        </text>
                    );
                })}
            </svg>
        );
    };

    // Render donut chart (variation of pie chart)
    const renderDonutChart = () => {
        const total = data.reduce((sum, item) => sum + item.value, 0);
        const outerRadius = 35;
        const innerRadius = 25; // Inner radius for donut hole
        const centerX = 50;
        const centerY = 45;

        let startAngle = 0;
        const slices = data.map((item, index) => {
            const percentage = item.value / total;
            const angle = percentage * 360;
            const endAngle = startAngle + angle;

            // Convert angles to radians for calculations
            const startRad = (startAngle * Math.PI) / 180;
            const endRad = (endAngle * Math.PI) / 180;

            // Calculate the outer arc points
            const outerX1 = centerX + outerRadius * Math.cos(startRad);
            const outerY1 = centerY + outerRadius * Math.sin(startRad);
            const outerX2 = centerX + outerRadius * Math.cos(endRad);
            const outerY2 = centerY + outerRadius * Math.sin(endRad);

            // Calculate the inner arc points
            const innerX1 = centerX + innerRadius * Math.cos(endRad);
            const innerY1 = centerY + innerRadius * Math.sin(endRad);
            const innerX2 = centerX + innerRadius * Math.cos(startRad);
            const innerY2 = centerY + innerRadius * Math.sin(startRad);

            // Determine if the arc should be drawn as a large arc
            const largeArcFlag = angle > 180 ? 1 : 0;

            // Create the SVG path for donut slice
            const path = [
                `M ${outerX1} ${outerY1}`,
                `A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${outerX2} ${outerY2}`,
                `L ${innerX1} ${innerY1}`,
                `A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${innerX2} ${innerY2}`,
                'Z'
            ].join(' ');

            // Calculate position for the label
            const labelRad = (startRad + endRad) / 2;
            const labelDistance = outerRadius * 1.2;
            const labelX = centerX + labelDistance * Math.cos(labelRad);
            const labelY = centerY + labelDistance * Math.sin(labelRad);

            // Update the start angle for the next slice
            startAngle = endAngle;

            return {
                path,
                color: item.color || colors[index % colors.length],
                label: item.label,
                value: item.value,
                percentage,
                labelX,
                labelY,
                startAngle: startAngle - angle,
                endAngle
            };
        });

        return (
            <svg viewBox="0 0 100 100" className="w-full h-full">
                {/* Background */}
                <rect x="0" y="0" width="100" height="100" fill={themeColors.background} rx="2" ry="2" />

                {/* Donut slices with hover effect */}
                <g className="transform transition-transform duration-300 hover:scale-105">
                    {slices.map((slice, index) => {
                        // Calculate a slightly larger radius for hover effect
                        const midAngle = (slice.startAngle + slice.endAngle) / 2 * Math.PI / 180;
                        const hoverX = centerX + Math.cos(midAngle) * 2;
                        const hoverY = centerY + Math.sin(midAngle) * 2;

                        return (
                            <path
                                key={index}
                                d={slice.path}
                                fill={slice.color}
                                stroke={themeColors.background}
                                strokeWidth="0.5"
                                className="drop-shadow-md transition-all duration-300 hover:brightness-110"
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                                transform={hoveredIndex === index ? `translate(${hoverX - centerX}, ${hoverY - centerY})` : ''}
                            />
                        );
                    })}
                </g>

                {/* Center text showing total */}
                <text
                    x={centerX}
                    y={centerY - 2}
                    textAnchor="middle"
                    fontSize="6"
                    fontWeight="bold"
                    fill={themeColors.text}
                    className="select-none"
                >
                    {formatValue(total)}
                </text>
                <text
                    x={centerX}
                    y={centerY + 5}
                    textAnchor="middle"
                    fontSize="3"
                    fill={themeColors.text}
                    opacity="0.7"
                    className="select-none"
                >
                    Total
                </text>

                {/* Tooltip */}
                {hoveredIndex !== null && (
                    <g>
                        <rect
                            x="50"
                            y="10"
                            width="40"
                            height="12"
                            rx="2"
                            ry="2"
                            fill={themeColors.text}
                            opacity="0.9"
                        />
                        <text
                            x="70"
                            y="15"
                            textAnchor="middle"
                            fontSize="3.5"
                            fontWeight="bold"
                            fill={themeColors.background}
                        >
                            {slices[hoveredIndex].label}
                        </text>
                        <text
                            x="70"
                            y="19"
                            textAnchor="middle"
                            fontSize="3"
                            fill={themeColors.background}
                        >
                            {formatValue(slices[hoveredIndex].value)} ({Math.round(slices[hoveredIndex].percentage * 100)}%)
                        </text>
                    </g>
                )}

                {/* Legend */}
                {showLegend && (
                    <g transform="translate(0, 100)">
                        {slices.map((slice, index) => (
                            <g
                                key={index}
                                transform={`translate(10, ${index * 6 - 30})`}
                                className="transition-opacity duration-200"
                                style={{ opacity: hoveredIndex === null || hoveredIndex === index ? 1 : 0.5 }}
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <rect
                                    width="4"
                                    height="4"
                                    fill={slice.color}
                                    rx="1"
                                    className="transition-all duration-300"
                                />
                                <text
                                    x="6"
                                    y="3"
                                    fontSize="3"
                                    fill={themeColors.text}
                                    className="transition-all duration-300"
                                >
                                    {slice.label} ({Math.round(slice.percentage * 100)}%)
                                </text>
                            </g>
                        ))}
                    </g>
                )}
            </svg>
        );
    };

    return (
        <div
            ref={chartRef}
            className={`bg-white rounded-xl shadow-md hover:shadow-lg border border-gray-100 p-6 transition-all duration-300 ${className}`}
        >
            {(title || subtitle) && (
                <div className="mb-6">
                    {title && <h3 className="text-lg font-medium text-gray-800">{title}</h3>}
                    {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
                </div>
            )}
            <div
                style={{ height: `${height}px` }}
                className="w-full transition-all duration-500 ease-in-out transform hover:scale-[1.01]"
            >
                {type === 'line' && renderLineChart()}
                {type === 'bar' && renderBarChart()}
                {type === 'pie' && renderPieChart()}
                {type === 'donut' && renderDonutChart()}
                {type === 'area' && renderAreaChart()}
            </div>
        </div>
    );
};

export default Chart;