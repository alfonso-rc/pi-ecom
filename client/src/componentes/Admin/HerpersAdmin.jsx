function validate(input) {
  let errors = {};
  if (!input.title) {
      errors.title = 'El objeto a vender necesita un nombre';
  }
  else if (input.title.length > 30) {
      errors.title = 'Ese es un nombre demasiado largo.';
  }
  else if(!isNaN(Number(input.title))) {
      errors.title = 'El nombre debe tener letras';
  }
  if (!input.marca) {
      errors.marca = 'La marca a vender necesita un nombre';
  }
  else if(!isNaN(Number(input.marca))) {
      errors.marca = 'La marca debe tener letras';
  }
  if (!input.modelo) {
      errors.modelo = 'El modelo a vender necesita un nombre';
  }
  else if (isNaN(parseInt(input.price))) {
      errors.price = 'El precio debe ser un número';
  }
  else if (input.price <= 0) {
      errors.price = 'La precio no puede ser menor a 0';
  }
  else if (!input.stock) {
      errors.stock = 'Falta completar el stock';
  }
  else if (isNaN(parseInt(input.stock))) {
      errors.stock = 'El stock disponible debe ser un número';
  }
  else if (input.stock <= 0) {
      errors.stock = 'El stock no puede ser menor a 0';
  }
  else if (!input.category.length ) {
    errors.category = "Es requerido al menos una categoria";
  }
  else if (!input.image) {
      errors.image = "Please insert internet image URL";
  } else if (
      !/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|)/.test(input.image)
    ) {
      errors.image = "Please insert a valid image URL";
    }
    if (!input.conectivity) {
      errors.modelo = 'El modelo a vender necesita un nombre';
  }

  return errors;
}

export default function AddArticles() {

  const dispatch = useDispatch();
  const allCategory = useSelector((state) => state.categorys);

  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
      title: '',
      rating: '',
      detail: {
          detail: '',marca: '',modelo: '',so:'',ram:'',cpu:'',color:'',pantalla:''
      },
      image: '',
      stock: '',
      price: '',
      conectivity: '',
      category: [],
  });

  useEffect(() => {
      dispatch(getCategory ());
  },[dispatch]);

  function handleChange(e) {
      setInput({
          ...input,
          [e.target.title]: e.target.value,
      });
      // Esta función hace lo siguiente:
      // Cada vez que modifique o agregue algo, a mi estado input, además de lo que tiene, le agrega
      // el value de lo que se esté modificando. La idea es que a medida que vaya llenando los inputs
      // del formulario, me vaya modificando el estado inicial, que tiene todas las propiedades vacías.

      setErrors(validate({
          ...input,
          [e.target.title]: e.target.value,
      }));
  }
  function handleCheckDif(e) {
      e.preventDefault();
      setInput({
        ...input,
        category: e.target.value,
      });
  }

function handleCheck(e) {
  if (e.target.checked) {
    setInput({
      ...input,
      category: [...input.category, e.target.value],
    });
  } else if (e.target.title === "category") {
    setInput({
      ...input,
      category: e.target.value,
    });
  } else {
    setInput({
      ...input,
      category: input.category?.filter((s) => s !== e.target.value),
    });
  }
}

  function handleSubmit(e) {
      e.preventDefault();
      // console.log(errors);
      if (!Object.getOwnPropertyNames(errors).length && input.title  && input.rating  && input.detail && input.price && input.modelo && input.marca && input.stock  && input.conectivity && input.image && input.category.length) {
          dispatch(postArticle(input));
          alert('Articulo creado con Exito');
          setInput({
              title: '',
              rating: '',
              detail: {
                  detail: '',marca: '',modelo: '',so:'',ram:'',cpu:'',color:'',pantalla:''
              },
              image: '',
              stock: '',
              price: '',
              conectivity: '',
              category: [],
          });
         
      } else {
          alert('Faltan datos para crear')
      }
  }

  return (
      <div className='fondo'>
         
          <h1 className='title-create'> Añadir un nuevo producto </h1>
          <br/>
          <div className="containerCv">
          <form onSubmit={e => handleSubmit(e)}>
              <div>
                  <label><strong >titulo: </strong></label>
                  <input type='text' value={input.title} name='title' onChange={e => handleChange(e)} />
                  {errors.title && (
                      <p ><strong>{errors.title}</strong></p>
                  )}
              </div>
              <div>
                  <label><strong >Rating: </strong></label>
                  <input type='text' value={input.rating} name='rating' onChange={e => handleChange(e)} />
                  {errors.ranting && (
                      <p ><strong>{errors.ranting}</strong></p>
                  )}
              </div>
              <div>
                  <label><strong >Detail: </strong></label>
                  <input type='text' value={input.detail.detail} name='detail' onChange={e => handleChange(e)} />
                  {errors.detail && (
                      <p ><strong>{errors.detail}</strong></p>
                  )}
              </div>
              <div>
                  <label><strong>Marca: </strong></label>
                  <input type='text' value={input.detail.marca} name='marca' onChange={e => handleChange(e)} />
                  <label><strong></strong></label>
                  {errors.marca && (
                      <p className='error'><strong>{errors.marca}</strong></p>
                  )}
              </div>
              <div>
                  <label><strong>Modelo: </strong></label>
                  <input type='text' value={input.detail.modelo} name='modelo' onChange={e => handleChange(e)} />
                  <label><strong></strong></label>
                  {errors.modelo && (
                      <p className='error'><strong>{errors.modelo}</strong></p>
                  )}
              </div>
              <div>
                  <label><strong>SO: </strong></label>
                  <input type='text' value={input.detail.so} name='so' onChange={e => handleChange(e)} />
                  <label><strong></strong></label>
                  {errors.so && (
                      <p className='error'><strong>{errors.so}</strong></p>
                  )}
              </div>
              <div>
                  <label><strong>Ram: </strong></label>
                  <input type='text' value={input.detail.modelo} name='modelo' onChange={e => handleChange(e)} />
                  <label><strong></strong></label>
                  {errors.modelo && (
                      <p className='error'><strong>{errors.modelo}</strong></p>
                  )}
              </div>
              <div>
                  <label><strong>Color: </strong></label>
                  <input type='text' value={input.detail.color} name='color' onChange={e => handleChange(e)} />
                  <label><strong></strong></label>
                  {errors.color && (
                      <p className='error'><strong>{errors.color}</strong></p>
                  )}
              </div>
              <div>
                  <label><strong>Pantalla: </strong></label>
                  <input type='text' value={input.detail.pantalla} name='modelo' onChange={e => handleChange(e)} />
                  <label><strong></strong></label>
                  {errors.pantalla && (
                      <p className='error'><strong>{errors.pantalla}</strong></p>
                  )}
              </div>
              <div>
                  <label><strong >stock: </strong></label>
                  <input type='text' value={input.weightMax} name='weightMax' onChange={e => handleChange(e)} />
                  <label><strong></strong></label>
                  {errors.weightMax && (
                      <p className='error'><strong>{errors.stock}</strong></p>
                  )}
              </div>
              <div>
                  <label><strong >Image: </strong></label>
                  <input type='text' value={input.image} name='image' onChange={e => handleChange(e)} />
                  <label><strong></strong></label>
                  {errors.image && (
                      <p className='error'><strong>{errors.image}</strong></p>
                  )}
              </div>
              <div>
                  <label><strong>Precio: </strong></label>
                  <input type='text' value={input.price} name='price' onChange={e => handleChange(e)} />
                  <label><strong></strong></label>
                  {errors.price && (
                      <p><strong>{errors.price}</strong></p>
                  )}
              </div>
              <div>
                  <label><strong>Conectividad: </strong></label>
                  <input type='text' value={input.conectividad} name='conectividad' onChange={e => handleChange(e)} />
                  <label><strong></strong></label>
                  {errors.conectividad && (
                      <p><strong>{errors.conectividad}</strong></p>
                  )}
              </div>
<div>
          <label>categoria: </label>
          <select  onChange={(e) => handleCheckDif(e)}>
              
          <option   value={0} >
              Seleccionar Dificultad
            </option>
            <option value={1} onChange={(e) => handleCheckDif(e)}>
              smartphone
            </option>
            <option value={2} onChange={(e) => handleCheckDif(e)}>
              notebooks
            </option>
            <option value={3} onChange={(e) => handleCheckDif(e)}>
              tablets
            </option>
            <option value={4} onChange={(e) => handleCheckDif(e)}>
              accesories
            </option>
            
          </select>
          {errors.category}
        </div>
              <div>
                  <label><strong>Imagen: </strong></label>
                  <input type='text' value={input.image} name='image' onChange={e => handleChange(e)} />
                  {errors.image && (
                      <p className='error'><strong>{errors.image}</strong></p>
                  )}
              </div>
             
              {/* crear el botton de dog y enviar al home */}
              {/* <button type='submit' className='boop' ><strong>Crear<IoPaw/></strong></button> */}
             <button type='submit' ><strong>Crear</strong></button>
             {/* button de salida */}
               <Link to='/home'><button ><strong>Volver</strong></button></Link>
             {/* <Link to='/home'><button className='buttonHome'>Home <GiDogHouse /></button></Link> */}
          </form>
          </div>
      </div>
  )
}

// id: el.id,
// title: el.title,
// rating: el.rating,
  // detail: el.detail.detail,
  // marca: el.detail.marca,
  // modelo: el.detail.modelo,
  // so: el.detail.so,
  // cpu: el.detail.cpu,
  // ram: el.detail.ram,
  // color: el.detail.color,
  // pantalla: el.detail.pantalla,
// image: el.image,
// stock: el.stock,
// disable: el.disable,
// price: el.price,
// conectividad: el.conectividad,
// category: el.categories[0].name,