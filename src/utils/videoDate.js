function videoDate(dateDetails){
   const now=new Date()
   const past=new Date(dateDetails)
   const diff=(now-past)/1000


   if(diff<60)return `${Math.floor(diff)} seconds ago`
   if(diff<3600) return `${Math.floor(diff/60)} minutes ago`
   if(diff<86400) return `${Math.floor(diff/3600)} hours ago`
   if(diff<2592000) return `${Math.floor(diff/86400)} days ago`
   if(diff<31104000) return `${Math.floor(diff/2592000)} months ago`
   return `${Math.floor(diff)} years ago`
}

const getDate=(mainDate)=>{
  return videoDate(mainDate)
}

export default videoDate

