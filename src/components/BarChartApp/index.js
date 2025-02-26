import {MainContainer} from './styledComponents'

import {
  BarChart,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Bar,
  Legend,
} from 'recharts'

const data = [
  {
    group_name: 'Group A',
    boys: 200,
    girls: 400,
  },
  {
    group_name: 'Group B',
    boys: 3000,
    girls: 500,
  },
  {
    group_name: 'Group C',
    boys: 1000,
    girls: 1500,
  },
  {
    group_name: 'Group D',
    boys: 700,
    girls: 1200,
  },
]

const BarChartApp = () => {
  const DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  return (
    <MainContainer>
      <ResponsiveContainer width="100%" height={500}>
        <BarChart data={data}>
          <XAxis dataKey="group_name" tick={{stroke: 'gray', strokeWidth: 1}} />
          <YAxis
            tickFormatter={DataFormatter}
            tick={{stroke: 'gray', strokeWidth: 0}}
          />
          <Legend wrapperStyle={{padding: 30}} />
          <Bar dataKey="boys" name="Boys" fill="#1f77b4" barSize="20%" />
          <Bar dataKey="girls" name="Girls" fill="#fd7f0e" barSize="20%" />
        </BarChart>
      </ResponsiveContainer>
    </MainContainer>
  )
}
export default BarChartApp
