Rails.application.routes.draw do
	root 'users#new'

	get '/home', to: 'home#view'
	post '/login', to: 'sessions#create'
	post 'file/load_post', to: 'file#load_post'
	post 'tutor/upload_concept', to: 'file#save_thesis_concept'
	get '/users/:id', to: 'users#find'
	get '/getUserInfo', to: 'users#getActualUserInfo'
	get '/project/find/:userId', to: 'project#getProjectForUser'	
	get 'file/download_project', to: 'file#download_pdf'
	get 'tutor/projects', to: 'users#getProjectsForTutor'
	get '/tutor/download/:id', to: 'file#downloadPdfTutor'
	resources :users
	
	get '*path', to: "users#new"
end
