export function convertToLocalDate(dateStr){
    const options = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };

      return new Date(dateStr).toLocaleDateString('en-US',options)
}