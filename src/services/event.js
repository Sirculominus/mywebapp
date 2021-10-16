import http from "../http-common";

class EventDataService {
    getAll(page = 0) {
      return http.get(`/events?page=${page}`);
    }
  
    get(id) {
      return http.get(`/event?id=${id}`);
    }
  
    find(query, by = "name", page = 0) {
      return http.get(`/events?${by}=${query}&page=${page}`);
    } 
  
    createReaction(data) {
      return http.post("/reaction-new", data);
    }
  
    updateReaction(data) {
      return http.put("/reaction-edit", data);
    }
  
    deleteReaction(id, userId) {
      return http.delete(`/reaction-delete?id=${id}`, {data:{user_id: userId}});
    }
  
    getTypes() {
      return http.get(`/types-getdistinct`);
    }
  }
  
  export default new EventDataService();