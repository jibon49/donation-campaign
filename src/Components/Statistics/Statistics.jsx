
import { useLoaderData } from 'react-router-dom';
import { PieChart, Legend, Pie, Cell, ResponsiveContainer } from 'recharts';



const COLORS = ['#FF444A', '#00C49F'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};



const Statistics = () => {

    const allData = useLoaderData();
    const donation = JSON.parse(localStorage.getItem('donation'))

    const allDonation = allData.length;
    const yourDonation = donation ? donation.length : 0;

    const totalDonation = Math.abs(yourDonation - allDonation);


  const data = [
    { name: 'Total Donation', value: totalDonation },
    { name: 'Your Donation', value: yourDonation },

  ];



  return (
    <div>
        <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend></Legend>
      </PieChart>
    </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
