import {useNavigate, useParams} from 'react-router-dom'


export default function withNavigate(Component) {
  return props => <Component { ...props } params={ useParams() } navigate={ useNavigate() } />;
}