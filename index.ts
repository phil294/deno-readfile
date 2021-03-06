const readFile = async (file: string, type?: string) => {
  const types = type || 'utf-8'
  return new TextDecoder(types).decode(
    await Deno.readFile(file)
  )
}

export default readFile
