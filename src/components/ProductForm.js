const ProductForm = () => {

  const onSubmitHandler = (event) => {
    event.preventDefault()
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <input type={"text"}/>
      <input type={"number"}/>
      <input type={"submit"}/>
    </form>
  )
}

export default ProductForm
