const FormatNumber = (number) => {
    const FormatNumber = new Intl.NumberFormat("id-ID")
    return FormatNumber.format(number)
}

export default FormatNumber