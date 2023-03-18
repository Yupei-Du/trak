Search.setIndex({docnames:["bert","clip","index","install","quickstart","slurm","trak"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":4,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.todo":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["bert.rst","clip.rst","index.rst","install.rst","quickstart.rst","slurm.rst","trak.rst"],objects:{"":[[6,0,0,"-","trak"]],"trak.gradient_computers":[[6,1,1,"","AbstractGradientComputer"],[6,1,1,"","FunctionalGradientComputer"],[6,1,1,"","IterativeGradientComputer"]],"trak.gradient_computers.AbstractGradientComputer":[[6,2,1,"","compute_loss_grad"],[6,2,1,"","compute_per_sample_grad"],[6,3,1,"","is_functional"],[6,2,1,"","load_model_params"]],"trak.gradient_computers.FunctionalGradientComputer":[[6,2,1,"","compute_loss_grad"],[6,2,1,"","compute_per_sample_grad"],[6,2,1,"","load_model_params"]],"trak.gradient_computers.IterativeGradientComputer":[[6,2,1,"","compute_loss_grad"],[6,2,1,"","compute_per_sample_grad"],[6,3,1,"","is_functional"],[6,2,1,"","load_model_params"]],"trak.modelout_functions":[[6,1,1,"","AbstractModelOutput"],[6,1,1,"","CLIPModelOutput"],[6,1,1,"","ImageClassificationModelOutput"],[6,1,1,"","IterImageClassificationModelOutput"]],"trak.modelout_functions.AbstractModelOutput":[[6,2,1,"","get_out_to_loss_grad"],[6,2,1,"","get_output"]],"trak.modelout_functions.CLIPModelOutput":[[6,2,1,"","get_embeddings"],[6,2,1,"","get_out_to_loss_grad"],[6,2,1,"","get_output"],[6,3,1,"","image_embeddings"],[6,3,1,"","num_computed_embeddings"],[6,3,1,"","sim_batch_size"],[6,3,1,"","text_embeddings"]],"trak.modelout_functions.ImageClassificationModelOutput":[[6,2,1,"","forward"],[6,2,1,"","get_out_to_loss_grad"],[6,2,1,"","get_output"]],"trak.modelout_functions.IterImageClassificationModelOutput":[[6,2,1,"","get_out_to_loss_grad"],[6,2,1,"","get_output"]],"trak.projectors":[[6,1,1,"","AbstractProjector"],[6,1,1,"","BasicProjector"],[6,1,1,"","BasicSingleBlockProjector"],[6,1,1,"","CudaProjector"],[6,1,1,"","ProjectionType"]],"trak.projectors.AbstractProjector":[[6,2,1,"","project"]],"trak.projectors.BasicProjector":[[6,2,1,"","generate_sketch_matrix"],[6,2,1,"","get_generator_states"],[6,2,1,"","project"]],"trak.projectors.BasicSingleBlockProjector":[[6,2,1,"","generate_sketch_matrix"],[6,2,1,"","project"]],"trak.projectors.CudaProjector":[[6,2,1,"","project"]],"trak.projectors.ProjectionType":[[6,3,1,"","normal"],[6,3,1,"","rademacher"]],"trak.savers":[[6,1,1,"","AbstractSaver"],[6,1,1,"","MmapSaver"],[6,4,1,"","ModelIDException"]],"trak.savers.AbstractSaver":[[6,2,1,"","clear_target_grad_count"],[6,2,1,"","del_grads"],[6,2,1,"","load_store"],[6,2,1,"","load_target_store"],[6,2,1,"","register_model_id"],[6,2,1,"","serialize_model_id_metadata"]],"trak.savers.MmapSaver":[[6,2,1,"","clear_target_grad_count"],[6,2,1,"","del_grads"],[6,2,1,"","init_store"],[6,2,1,"","load_store"],[6,2,1,"","load_target_store"],[6,2,1,"","register_model_id"],[6,2,1,"","save_scores"],[6,2,1,"","serialize_model_id_metadata"]],"trak.score_computers":[[6,1,1,"","AbstractScoreComputer"],[6,1,1,"","BasicScoreComputer"],[6,1,1,"","BasicSingleBlockScoreComputer"]],"trak.score_computers.AbstractScoreComputer":[[6,2,1,"","get_scores"],[6,2,1,"","get_x_xtx_inv"],[6,2,1,"","get_xtx"]],"trak.score_computers.BasicScoreComputer":[[6,2,1,"","get_scores"],[6,2,1,"","get_x_xtx_inv"],[6,2,1,"","get_xtx"]],"trak.score_computers.BasicSingleBlockScoreComputer":[[6,2,1,"","get_scores"],[6,2,1,"","get_x_xtx_inv"],[6,2,1,"","get_xtx"]],"trak.traker":[[6,1,1,"","TRAKer"]],"trak.traker.TRAKer":[[6,2,1,"","featurize"],[6,2,1,"","finalize_features"],[6,2,1,"","finalize_scores"],[6,2,1,"","init_projector"],[6,2,1,"","load_checkpoint"],[6,2,1,"","score"],[6,2,1,"","start_scoring_checkpoint"]],"trak.utils":[[6,5,1,"","get_num_params"],[6,5,1,"","get_params_dict"],[6,5,1,"","is_not_buffer"],[6,5,1,"","parameters_to_vector"],[6,5,1,"","vectorize_and_ignore_buffers"]],trak:[[6,0,0,"-","gradient_computers"],[6,0,0,"-","modelout_functions"],[6,0,0,"-","projectors"],[6,0,0,"-","savers"],[6,0,0,"-","score_computers"],[6,0,0,"-","traker"],[6,0,0,"-","utils"]]},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","exception","Python exception"],"5":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:exception","5":"py:function"},terms:{"0":[2,3,5,6],"1":[2,3,5,6],"10":[2,3,5],"100":6,"100000":6,"1024":6,"11":3,"12":3,"14":5,"2":6,"200":6,"2048":6,"3":6,"300":6,"4":6,"5":[3,6],"50000":6,"50_000":6,"64":[],"7":[3,6],"8":5,"9":5,"abstract":6,"break":6,"case":3,"class":6,"default":[3,5,6],"do":[5,6],"enum":6,"export":3,"final":[5,6],"float":6,"function":6,"import":5,"int":[5,6],"new":6,"return":6,"short":2,"static":6,"true":[5,6],A:6,At:[],For:[3,5,6],If:[3,6],In:6,It:6,On:3,Or:[],That:5,The:[3,5,6],These:6,To:[3,5],_:6,__main__:5,__name__:5,_allow_featurizing_already_regist:6,_description_:6,_summary_:6,a100:[5,6],abc:6,about:[5,6],abov:[5,6],abstractgradientcomput:6,abstractmodeloutput:6,abstractprojector:6,abstractsav:6,abstractscorecomput:6,accumul:6,achiev:5,across:[5,6],action:[],activ:2,ad:6,add:[2,3],add_argu:5,addit:6,addition:6,all:[5,6],allow:6,almost:6,alon:6,along:6,alongsid:3,alreadi:[3,6],also:6,an:[3,6],analyt:6,ani:6,anyth:6,api:2,appli:6,applic:6,apt:3,ar:[2,3,6],arg:[5,6],argpars:5,argumentpars:5,arrai:[5,6],assertionerror:6,associ:6,attempt:5,attribut:6,autograd:6,avail:[3,6],avoid:6,b:6,backward:6,bare:6,base:[2,6],bash:5,basicprojector:6,basicscorecomput:6,basicsingleblockprojector:6,basicsingleblockscorecomput:6,batch:[5,6],batch_siz:6,been:3,befor:[3,6],behavior:6,behaviour:6,behind:5,below:[3,5],bert:2,big:6,bin:5,block:6,block_siz:6,blog:2,bone:6,bool:6,both:6,buffer:6,c:[3,6],call:[5,6],can:[3,5,6],cannot:6,capabl:6,caption:6,cc:3,cdot:6,chang:2,check:[3,5,6],checkpoint:[5,6],checopint:[],choic:6,chosen:6,cifar10:[],cifar:2,ckpt:5,ckpt_:5,classif:6,clear_target_grad_count:6,clip:[2,6],clipmodeloutput:6,cluster:3,coda:[],code:5,com:[3,6],combin:5,come:[0,1,3,4],command:[3,5],comment:[],commit:6,compani:3,compat:[3,6],compil:3,comput:[5,6],compute_loss_grad:6,compute_per_sample_grad:6,conda:3,confid:3,configur:3,confus:6,consid:6,contain:3,content:[],context:6,contrast:6,copi:5,correct:6,count:6,cpu:5,crawler:[],creat:6,cuda:6,cuda_max_dim_s:6,cudaprojector:6,cudatoolkit:3,current:5,current_:6,custom:[3,6],cxx:3,data:6,dataload:[],dataset:[],def:5,definit:5,del_grad:6,delet:6,deriv:6,desc:[],design:[5,6],desir:6,detail:[5,6],determin:6,dev:3,develop:[2,6],devic:6,diagon:6,dict:6,dictionari:6,differ:6,dimens:6,dimension:6,dir:6,disk:6,distribut:5,doc:[3,5,6],document:3,doe:6,doesn:6,don:[5,6],done:3,doubt:3,download:3,ds_train:5,ds_val:[],dtype:6,dure:6,e:[5,6],each:[5,6],eas:5,easy_instal:[],either:6,ell:6,embed:6,embedding_dim:6,enabl:[3,6],end:5,entir:6,entri:6,enumer:6,equival:6,error:6,etc:6,eval:[],even:6,everi:6,everyth:5,exampl:[3,5,6],except:6,exist:[3,6],exmapl:5,exp_nam:6,f:[5,6],fals:6,faq:2,fast:3,faster:6,feasibl:6,featur:[5,6],featurize_and_scor:5,feel:[3,6],figur:2,file:[5,6],finalize_featur:[5,6],finalize_scor:[5,6],find:5,fix:6,flatten:6,float16:6,float32:6,follow:[3,6],footprint:6,forbidden:6,forg:3,forward:6,four:[],frac:6,free:6,from:[2,5,6],func:6,func_model:6,functionalgradientcomput:6,functorch:6,g:[3,5,6],gather:5,gcc:[],gcc_linux:[],gener:6,generate_sketch_matrix:6,generator_st:6,get:[2,5],get_embed:6,get_generator_st:6,get_num_param:6,get_out_to_loss_grad:6,get_output:6,get_params_dict:6,get_scor:6,get_x_xtx_inv:6,get_xtx:6,getter:6,given:6,gnu:[],go:5,good:6,gpu:[5,6],grad:6,grad_dim:6,grad_out_to_loss:6,grad_w0:6,grad_w1:6,grad_wi:6,grad_wp:6,gradient:6,gradient_comput:[],gradientcomput:6,grads_shap:[],gre:5,guid:3,gxx_linux:[],ha:[3,6],handl:6,happen:3,hardcod:[],have:[3,5,6],help:5,henc:6,here:[3,5,6],heta:6,highli:5,highlight:5,host:3,how:6,html:[3,6],http:[3,6],hyperparamet:6,i:6,id:[5,6],idea:5,imag:6,image_classif:5,image_embed:6,imageclassificationmodeloutput:6,implement:6,includ:6,incompat:3,ind:6,index:[2,3],indic:6,ineffici:6,init:6,init_projector:6,init_stor:6,initi:6,input:6,instal:2,instanc:5,instead:6,instruct:3,integr:5,intermedi:[5,6],intern:6,invok:6,is_funct:6,is_not_buff:6,iter:6,iterativegradientcomput:6,iterimageclassificationmodeloutput:6,its:6,jl:[3,6],job:5,johnson:6,kernel:3,kwarg:6,label:6,languag:6,larger:6,last:6,learn:[5,6],left:5,len:5,let:[3,6],leverag:[5,6],like:[5,6],lindenstrauss:6,line:5,link:[2,6],linux:[],list:[3,6],littl:[],ll:[5,6],load:[3,5,6],load_checkpoint:[5,6],load_model_param:6,load_state_dict:6,load_stor:6,load_target_stor:6,loader:6,loader_train:5,loader_v:5,log:[3,6],logit:6,look:5,loss:6,lot:2,machin:3,mai:[2,3,5],main:5,maintain:3,make:6,make_functional_with_buff:6,mani:6,manner:6,map:6,margin:6,math:6,matmul:6,matric:6,matrix:6,maximum:6,mean:5,memmap:6,memori:6,metadata:6,method:[5,6],might:3,minim:6,mkvirtualenv:[],mmap:6,mmapsav:6,mode:6,model:[5,6],model_id:[5,6],model_out_to_loss:6,model_out_to_loss_grad:6,modelidexcept:6,modelout_fn:6,modelout_funct:[],modeloutput:[2,6],modeloutputfunct:[],modifi:6,modul:[2,3],modulefil:3,more:[5,6],most:[3,6],much:6,multiclass:6,multimod:6,multipl:5,must:6,n:6,nabla_:6,name:[5,6],need:[3,5,6],nn:6,node:5,none:6,normal:6,notat:6,note:[3,5,6],notebook:6,now:5,npy:6,num_computed_embed:6,num_param:6,num_sampl:6,num_target:6,number:6,numpi:6,nvcc:[],nvidia:[3,6],object:6,often:5,old:6,one:[3,6],onli:[5,6],oom:6,oper:3,option:[3,5,6],org:6,other:3,otherwis:6,our:[3,5,6],out:[5,6],out_to_loss:6,outdat:3,output:6,overal:5,overrid:6,p:6,packag:3,page:[],pair:6,paper:[2,5,6],parallel:2,paralleliz:5,paramet:6,parameters_to_vector:6,params_dict:6,parse_arg:5,parser:5,part:6,partial:6,particular:6,pass:[5,6],path:[5,6],pathlib:6,per:[5,6],per_sample_grad:6,perform:6,peski:6,phi:6,phi_c:6,pick:3,pip:3,pleas:6,plese:3,popul:[5,6],post:5,power:5,ppa:3,pr:6,predict:6,preinstal:3,prepar:6,preprocess_fn_img:6,preprocess_fn_txt:6,prioriti:5,probabl:6,problem:[5,6],proce:3,process:5,produc:6,proj_dim:6,proj_typ:6,project:[3,6],projectiontyp:6,projector:[],proper:[],provid:6,psi:6,pt:5,purpos:6,py:5,pypi:3,python:5,pytorch:6,q:6,quick:3,quickstart:2,r:[3,6],rademach:6,rais:6,random:6,rang:6,re:6,read:6,reason:6,recommend:6,record:6,reduct:6,refer:[2,3],regard:3,regist:6,register_model_id:6,relat:6,replac:[],repositori:3,requir:[3,5,6],reset:6,reshap:6,resnet18:6,respect:[5,6],result:[5,6],reweight:6,root:3,run:[3,5,6],rune:3,s:[3,5,6],same:[3,5,6],sampl:6,save:6,save_dir:[5,6],save_scor:6,saver:[],sbatch:5,scalar:6,schedul:5,score:[2,6],score_comput:[],scorecomput:6,script:5,search:[],section:[3,6],see:[3,5,6],seed:6,self:6,sequenti:6,serial:6,serialize_model_id_metadata:6,set:6,setter:6,setup:3,shape:6,share:3,ship:3,should:[5,6],shouldn:6,show:3,shuffl:[],signatur:6,significantli:6,sim_batch_s:6,similar:6,simpl:[5,6],simpli:6,simul:6,simulated_batch_s:6,sinc:6,siu:[],size:6,sketch:5,skip:5,slightli:6,slower:6,slurm:2,slurm_array_task_id:5,slurm_example_result:[],small:6,so:6,softmax:6,some:[3,5],someth:6,soon:[0,1,4],sourc:6,specifi:[5,6],stabl:6,standard:3,start:[3,6],start_scoring_checkpoint:[5,6],state:6,state_dict:6,step:[3,6],still:2,store:6,str:6,strongli:6,structur:6,subclass:[2,6],submit:5,submodul:[],sudo:3,sum_:6,summari:2,system:[3,5],t:[5,6],take:6,target:6,target_grad:6,task:[2,5,6],temperatur:6,tensor:6,term:6,termin:[3,5],test:[3,6],text:6,text_embed:6,than:6,thei:3,them:6,theta:6,thi:[3,5,6],thing:[2,5],think:[5,6],three:[5,6],thu:6,ti:6,time:3,tip:3,tmp:[],todo:[2,6],togeth:6,tookit:3,toolchain:3,toolkit:[],top:6,torch:[5,6],torchvis:[],totensor:[],tqdm:[],train:[5,6],train_set_s:[5,6],trak:[],trak_result:6,traker:[2,3,5],transform:6,tupl:6,two:[],type:[5,6],ubuntu:3,under:2,union:6,uniqu:6,unless:6,unvers:3,up:5,updat:[3,6],us:[3,5,6],usual:3,util:[],uuid:6,valu:6,vector:6,vectorize_and_ignore_buff:6,veri:6,version:[2,3,6],view:6,virtualenvwrapp:[],vision:6,vmap:6,wa:5,wai:[3,5],want:6,we:[2,5,6],weight:6,well:6,what:[3,5,6],when:[3,5,6],where:6,whether:6,which:[3,6],why:5,wise:6,without:[3,6],would:5,write:[5,6],x86_64:[],x:[2,6],xtx:6,y:6,ye:6,you:[3,5,6],your:[3,6],z:6,z_i:6},titles:["Add  a <code class=\"code docutils literal notranslate\"><span class=\"pre\">task</span></code> to <code class=\"code docutils literal notranslate\"><span class=\"pre\">TRAKer</span></code> (subclassing <code class=\"code docutils literal notranslate\"><span class=\"pre\">ModelOutput</span></code>) \u2014 BERT-base","Add  a <code class=\"code docutils literal notranslate\"><span class=\"pre\">task</span></code> to <code class=\"code docutils literal notranslate\"><span class=\"pre\">TRAKer</span></code> (subclassing <code class=\"code docutils literal notranslate\"><span class=\"pre\">ModelOutput</span></code>) \u2014 CLIP","Welcome to TRAK\u2019s documentation!","Installation FAQs","Quickstart \u2014 get <code class=\"code docutils literal notranslate\"><span class=\"pre\">TRAK</span></code> scores for <code class=\"code docutils literal notranslate\"><span class=\"pre\">CIFAR-10</span></code>","Parallelize <code class=\"code docutils literal notranslate\"><span class=\"pre\">TRAK</span></code> scoring with <code class=\"code docutils literal notranslate\"><span class=\"pre\">SLURM</span></code>","API reference"],titleterms:{"10":4,"class":[],add:[0,1],api:6,base:0,bert:0,cifar:4,clip:1,content:[2,6],cuda:3,document:2,exampl:[],faq:3,gcc:3,get:4,gradient_comput:6,how:3,index:[],indic:2,instal:3,intro:[],modelout_funct:6,modeloutput:[0,1],modeloutputfunct:[],modul:6,nvcc:3,packag:[],parallel:5,projector:6,quickstart:4,refer:6,s:2,saver:6,score:[4,5],score_comput:6,slurm:5,subclass:[0,1],submodul:[],tabl:2,task:[0,1],toolkit:3,trak:[2,3,4,5,6],traker:[0,1,6],util:6,welcom:2}})