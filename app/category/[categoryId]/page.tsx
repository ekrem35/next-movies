async function delay() {
  return new Promise(resolve => setTimeout(resolve, 2500))
}

export default async function Category(props: {
  params: {
    categoryId: string
  }
}) {
  await delay()

  return <div>Category id {props.params.categoryId}</div>
}
