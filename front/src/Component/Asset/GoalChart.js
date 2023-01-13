import { ResponsiveBullet } from '@nivo/bullet';

const GoalChart = ({ GoalData }) => {
  return (
    <ResponsiveBullet
      data={GoalData.map((goal) => ({
        ...goal,
        title: (
          <text dy={5}>
            <tspan
              style={{
                fill: '#6a8bca',
                fontWeight: 500,
                fontSize: '15px',
              }}
            >
              {goal.id}
            </tspan>
          </text>
        ),
      }))}
      margin={{ top: 50, right: 90, bottom: 50, left: 90 }}
      spacing={46}
      titleAlign="start"
      titleOffsetX={-80}
      rangeBorderColor={{ from: 'color', modifiers: [] }}
      rangeBorderWidth={15}
      rangeColors="#FFD24C"
      // rangeColors="seq:yellow_orange_brown"
      measureSize={0.5}
      measureColors="#FFE69A"
    />
  );
};
export default GoalChart;
