module Response
  def json_response(object, status = :ok)
    render json: object, status: status 
  end
  
  # def formated_date_obj(object)
  #   date_types = [:acquired, :ceased, :created_at, :updated_at]    
  #   object.each do |obj|
  #     date_types.each do |type|
  #       date = obj[type].to_s.split(" ")[0]
  #       obj[type] = Date.parse(date)
  #     end
  #   end
  #   return object
  # end
end