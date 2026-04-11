
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ReactBarChart = () => {

    const data = [
        {
          name: 'Sat',
          uv: 4000,
          pv: 6400,
          amt: 4200,
        },
        {
          name: 'Sun',
          uv: 3000,
          pv: 7098,
          amt: 300,
        },
        {
          name: 'Mon',
          uv: 5000,
          pv: 9800,
          amt: 400,
        },
        {
          name: 'Tue',
          uv: 4080,
          pv: 5008,
          amt: 500,
        },
        {
          name: 'Wed',
          uv: 6890,
          pv: 8800,
          amt: 2181,
        },
        {
          name: 'Thu',
          uv: 2390,
          pv: 3800,
          amt: 600,
        },
        {
          name: 'Fri',
          uv: 8490,
          pv: 4300,
          amt: 700,
        },
      ];
    return (
        
    <ResponsiveContainer className={`w-full h-full max-h-64`}>
        <BarChart
          width={500}
          height={500}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="2 2" />
          <XAxis dataKey="name" className='' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar className='w-[20px]' dataKey="pv" fill="#8884d8" background={{ fill: '#eee' }} />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
            
       
    );
};

export default ReactBarChart;