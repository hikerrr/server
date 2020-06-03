const listAll = (req,res) => {
  let data = {
    title:'Careers',
    navColor: 'var(--color-dark)'
  }
  res.render('careers', {data});
}

export default {listAll};
