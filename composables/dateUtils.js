export default function useDateUtils() {
  const formatDateFull = (dateString) => {
    const months = [
      'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
      'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];

    const [year, month, day] = dateString.split('-')
    const monthName = months[parseInt(month) - 1]

    return `${day}, ${monthName} de ${year}`
  }

  return {
    formatDateFull,
  }
}