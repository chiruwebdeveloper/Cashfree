import './App.css';
import Header from './components/Header'
import Button from './components/Button'
import Grid from './components/Grid'

function App() {
  return (
    <div className="App">
      <Header />
      <Button btnsize="btn-lg" label="Large Size Button"/>
      <Button label="Default Size Button"/>
      <Button btnsize="btn-sm" label="Small Size Button"/>
      <br /><Button icon={<i className="fa fa-check" />} label="With Icon"/>
      <Button label="Without Icon"/>
      <br /><Button disable="disabled" label="Disabled State" />
      {/* <Button  label="Loading State" /> */}
      <div class="clearfix">&nbsp;</div>
      <div class="container">
        <div class="row">
        <Grid columns="4" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"/>
        <Grid columns="4" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"/>
        <Grid columns="4" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"/>
        <Grid columns="4" offset="2" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"/>
        <Grid columns="4" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"/>
        <Grid columns="6" gutterwidth="60px" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"/>
        <Grid columns="6" gutterwidth="30px" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"/>
        </div>
      </div>
    </div>
  );
}

export default App;
