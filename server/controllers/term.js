const listAll = (req,res) => {
  let data = {
    title:'Terms & Conditions',
    navColor:'var(--color-dark)'
  }
  res.render('terms',{data});
}

export default {listAll};
