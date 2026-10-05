// English study material; the original Arabic explanations are retained as notes.
const translations={
lecture1:[
['Calculating the mean of the observed sample is an example of…',['Descriptive Statistics','Inferential Statistics','Data Fusion','Cluster Sampling'],'It summarizes the available observations without generalizing to a larger population.'],
['Estimating the university-wide mean from a sample is…',['Descriptive Statistics','Inferential Statistics','Nominal Data','Data Scrubbing'],'Inference uses sample information to draw a conclusion about a population, with uncertainty.'],
['In a patient dataset, the experimental unit is…',['All patients','One patient','The age column','The mean age'],'An experimental unit is the individual object on which data are collected.'],
['All university students in a study of that university form the…',['Variable','Sample','Population','Stratum only'],'The population contains all units of interest.'],
['A satisfaction scale of Low / Medium / High is…',['Nominal','Ordinal','Quantitative','An identifier'],'These categories have an order, but equal distances between them are not guaranteed.'],
['Statistically, a customer number such as CLIENTNUM is…',['A quantity with a meaningful average','A nominal identifier','Ordinal','A continuous measurement'],'Its digits identify a customer; arithmetic on the identifier does not measure a customer characteristic.'],
['Age = 28 and Age group = 20–29 are, respectively…',['Both quantitative','Nominal and quantitative','Quantitative and ordinal','Both nominal'],'Age is a numerical measurement. An age group is an ordered category.'],
['Recording customer waiting times without intervening is…',['An experiment','Direct observation','Imputation','Data fusion'],'The observer records behavior in its existing setting.'],
['Changing a product design and measuring the effect is…',['A survey','An experiment','A crosstab','Metadata'],'An experiment introduces a treatment or intervention and studies its effect.'],
['If 120 of 200 selected people respond, the response rate is…',['40%','60%','120%','20%'],'Response rate = 120 / 200 × 100 = 60%.'],
['Which item is a leading question?',['How often did you use the service?','Do you prefer cash payments?','Don’t you agree that our service is excellent?','What is your age group?'],'It pushes the respondent toward a preferred answer.'],
['The defining property of simple random sampling is…',['People are selected in order','Every possible sample of the same size is equally likely','Only one stratum is selected','It automatically removes every form of bias'],'Equal probability applies to each possible sample of a fixed size.'],
['Randomly selecting students from every academic year is…',['Cluster sampling','Stratified random sampling','Convenience sampling','Late fusion'],'Academic years act as strata, and a random sample is drawn from each.'],
['Randomly selecting three schools and studying all their students is…',['Simple random sampling of individuals','Stratified sampling','One-stage cluster sampling','Quota sampling'],'Entire groups, rather than individual students, are the units selected.'],
['A stratum contains 25% of the population. With proportional allocation and n = 400, its sample size is…',['25','50','100','200'],'400 × 0.25 = 100 observations.'],
['Increasing the size of a biased sample…',['Guarantees removal of bias','Does not fix selection bias by itself','Converts nominal data to numeric data','Prevents nonresponse'],'More observations do not repair systematic exclusion from the sampling frame.'],
['Entering a height of 1700 instead of 170 is…',['Sampling error','A data acquisition error','Inference','Stratification'],'This is a recording or measurement problem, rather than random variation due to sampling.'],
['When nonrespondents differ systematically from respondents, the study may suffer from…',['Nonresponse error','Guaranteed higher precision','Early fusion','Normalization'],'The collected observations may no longer represent the target population.'],
['Sampling error arises from…',['Random differences caused by the observations selected','Only typing mistakes','Only deliberate exclusion of a group','Duplicate merge keys'],'A sample can differ from its population because only some units were observed.'],
['Sample size should be chosen using…',['Population size alone','The largest available number alone','The study goal, precision, resources and expected response rate','Storage dtype alone'],'Several design factors matter; no single sample size is appropriate for every study.']
],
lecture2:[
['A blank Salary value is primarily a problem of…',['Timeliness','Completeness','Interpretability','Covariance'],'The required information has not been recorded.'],
['Age = −10 raises a problem of…',['Accuracy','Completeness only','Fusion','Sampling'],'A negative age is invalid in this setting and requires checking against the source.'],
['Using the same ID for two different people threatens…',['Consistency','Response rate','Early fusion','Sample size only'],'The identifier no longer agrees with the expected one-entity-per-key rule.'],
['An undefined column named SVC reduces…',['Timeliness','Interpretability','Only the mean','n − 1'],'The meaning and units are unclear, so metadata are needed.'],
['An accurate 2019 record used to study current conditions may lack…',['Timeliness','Nominality','Frequency','Guaranteed independence'],'A historically correct value may not be current enough for the intended analysis.'],
['Finding an outlier means that we should…',['Delete it immediately','Assume it is definitely an error','Investigate it; it may be a valid observation','Replace it with zero'],'An unusual value is a reason to investigate, not proof of an error.'],
['Median imputation is especially useful when a numerical variable has…',['Extreme values','Identifiers','Only unordered categories','A join key'],'The median is less affected by extreme observations than the mean.'],
['Replacing every missing value with zero…',['Is always correct','May change the meaning and distribution of the data','Always improves quality','Guarantees independence'],'Zero is a meaningful value, not a universal representation of missing information.'],
['Before smoothing with binning, we should…',['Sort the values and divide them into bins','Calculate correlation only','Delete every row','Convert every value to a string'],'The lecture’s binning procedure begins by sorting and partitioning the data.'],
['What is the mean of the bin [4, 8, 15]?',['8','9','15','27'],'(4 + 8 + 15) / 3 = 9.'],
['Matching cust-id and cust-# across sources is an example of…',['Schema integration','Nonresponse','A chi-square result','Sampling error'],'The structure and meaning of corresponding fields must be aligned.'],
['Combining height measurements in meters and feet requires…',['Ignoring the difference','Converting to consistent units','Adding the two values','Deleting the population'],'Different measurement scales can create conflicting values for the same entity.'],
['The null hypothesis in a chi-square test of independence is…',['The two categorical variables are independent','r is always 1','All observed values are equal','There is causation'],'Observed counts are compared with counts expected under independence.'],
['A row total is 450, a column total is 300 and N = 1500. The expected count is…',['90','300','450','1350'],'E = 450 × 300 / 1500 = 90.'],
['For a 2 × 3 contingency table, the degrees of freedom are…',['1','2','3','6'],'df = (2 − 1)(3 − 1) = 2.'],
['Which statement correctly distinguishes α from the p-value?',['They must be the same number','α is chosen in advance; the p-value is calculated from the data','Both are counts','Both are Pearson r'],'The significance threshold is a design choice; the p-value is an output of the test.'],
['A Pearson coefficient of r = −0.95 indicates…',['A strong negative linear relationship','No relationship','Zero covariance','A weak positive relationship'],'The sign is negative, and the absolute value is close to one.'],
['A Pearson coefficient of r = 0 implies…',['Independence in every case','No linear association; a nonlinear relationship may still exist','Causation','Identical columns'],'Pearson measures linear association, not every possible dependency.'],
['In the stock example, the centered cross-product sum is 20 and n = 5. The population covariance is…',['4','5','20','0.8'],'Population covariance uses n: 20 / 5 = 4. Sample covariance uses n − 1 and equals 5.'],
['Combining separate model decisions through voting is…',['Raw fusion','Feature fusion','Decision / late fusion','Data cleaning'],'Information is combined after each model has produced a decision.'],
['Building one representation from extracted features is…',['Feature fusion','Response bias','Row deletion','Raw early fusion only'],'The fusion takes place at the feature level.'],
['Does zero covariance guarantee independence?',['Yes, always','No, not without additional assumptions','Yes, if the sample is larger','Yes, for outliers'],'A nonlinear dependency can exist even when covariance is zero.'],
['If one variable has a standard deviation of zero, Pearson r is…',['1','Undefined','−1','Evidence of causation'],'The denominator contains that standard deviation, so the coefficient cannot be calculated.'],
['Using test-set information to impute training data can cause…',['Data leakage','Cluster sampling','Guaranteed trustworthy accuracy','Schema mapping'],'Evaluation information leaks into training and undermines the estimate of generalization performance.']
],
lab1:[
['What is the shape of the supplied heart.csv?',['(303, 14)','(14, 303)','(10127, 21)','4242'],'The file has 303 records and 14 columns.'],
['For the supplied heart.csv, df.size equals…',['303','14','4242','317'],'The number of cells is 303 × 14 = 4242.'],
['Which expression returns the last three records?',['df.tail()','df.tail(3)','df.head(3)','df.shape[3]'],'The default is five rows, so the number three must be specified.'],
['With the original RangeIndex, df.loc[10:15] returns…',['5 rows','6 rows','15 rows','10 rows'],'Label slicing includes both endpoints when the labels are present.'],
['Which positional slice selects rows 10 through 15?',['iloc[10:15]','iloc[10:16]','iloc[11:16]','iloc[10:14]'],'The stop position in iloc is excluded.'],
['Which expression selects both age and target?',["df['age','target']","df[['age','target']]","df.age.target","df.columns(2)"],'Pass a list of column names inside the selection brackets.'],
['Which method returns category frequencies as proportions?',['value_counts(normalize=True)','nunique()','shape','tail()'],'Normalization divides each category count by the total count of nonmissing values.'],
['In the supplied crosstab, P(target = 1 | sex = 1) is…',['93/165','93/207','165/303','72/96'],'The condition is sex = 1, so the denominator is the 207 records in that group.'],
['After target has been mapped to Yes / No, comparing it with the integer 1…',['Preserves the original meaning','May make a second mapping return No for every row','Calculates the mean','Increases the sample size'],'The values are now strings; comparing Yes with 1 is false.'],
['Which expression saves a CSV without an extra index column?',["to_csv('x.csv', index=False)","to_csv('x.csv', index=True)",'df.save()','df.columns.csv()'],'index=False prevents the DataFrame index from being written as an additional column.']
],
lab2:[
['What is the shape of the supplied customers.csv?',['303 × 14','10127 × 21','500 × 5','1500 × 2'],'The actual file contains 10,127 records and 21 columns.'],
['In age.sample(n=500, random_state=42), the seed is used to…',['Guarantee perfect representativeness','Make the selection reproducible','Select every age','Automatically create a stratified sample'],'Fixing the random state allows the same selection to be repeated.'],
['To compare histograms of 500 sample records and 10,127 population records, use…',['Raw counts and different bins','Density or proportions with the same bins','Different colors alone','A hidden axis'],'A shared scale and shared bin edges let us compare distribution shapes fairly.'],
['The largest-remainder allocation in the worked example is…',['[36, 145, 205, 98, 16]','[100, 100, 100, 100, 100]','[36, 169, 222, 102, 15]','500 from each stratum'],'These allocations sum to exactly 500 and use the actual stratum counts.'],
['Using isin(["1", "2"]) with integer KMeans labels…',['May return an empty sample','Guarantees selection of two clusters','Always converts the types automatically','Removes CLIENTNUM'],'Strings do not match integer labels; the value types must agree.'],
['Why should CLIENTNUM be removed before KMeans?',['It is larger than 500','An identifier is not a meaningful numerical feature','It is always missing','To reduce the response rate'],'Distances between arbitrary customer identifiers do not express customer similarity.'],
['Scaling numerical features before KMeans helps…',['Prevent large-unit variables from dominating distances','Prove causation','Create a population','Guarantee equal cluster sizes'],'KMeans uses distances, so measurement scales affect the clustering.'],
['Which expression calculates Pearson correlation between Series a and b?',['a.corr(b)','a.corr()','a,b.corr()','a.mean(b)'],'Series.corr requires the other Series as an argument.'],
['The correlation between Credit_Limit and Avg_Open_To_Buy is approximately…',['−0.996','0','0.996','4'],'The coefficient calculated from the supplied file is approximately 0.9959805439.'],
['Covariance calculated with n − 1 must be paired with standard deviations using…',['ddof=0','ddof=1','Any convention, without affecting the result','SD=0'],'The covariance and standard deviations must use the same denominator convention.'],
['Selecting three complete clusters produces…',['Exactly 500 individuals','A sample size determined by the selected cluster sizes','Proportional stratified sampling','r = 1'],'The number of individuals depends on the sizes of the groups selected.'],
['Stratified random sampling and quota sampling…',['Are always identical','Differ: the former samples randomly within strata','Both require KMeans','Do not use categories'],'Quota sampling may fill category quotas through nonrandom selection.']
]};
const referenceTranslations=[
['Coding Low=1, Medium=2, High=3 and Unknown=4 creates…',['A fully ordinal scale','A scale that is not fully ordinal because Unknown is not a satisfaction rank','Quantitative data','Continuous data'],'Numerical codes alone do not create an order. Unknown does not mean greater satisfaction than High.'],
['Why are ten leaves from one tree not equivalent to observations from ten well-separated trees?',['Leaves are always nominal','Observations may depend on a shared source','Sample size never matters','All trees are identical'],'A shared source can introduce dependence; the observation count alone does not guarantee independent information.'],
['Can one database be high quality for one task and low quality for another?',['No; quality is always fixed','Yes; quality depends on intended use','Only if the row count changes','Only for nominal data'],'One use may tolerate less current or less precise values than another. Define the intended use before assessing quality.'],
['Using January 1 as a default birth date for every unknown value creates…',['Complete and reliable data','Disguised missing data','Stratified sampling','Late fusion'],'A filled cell can conceal missing information; apparent completeness does not guarantee accuracy.']
];
const writtenTranslations=[
['Compare stratified and cluster sampling using a university example.','Stratified sampling: group students by academic year and randomly sample from every year. One-stage cluster sampling: randomly select classes and include every student in those classes. Stratification represents each stratum; selecting whole clusters can simplify collection, but similarity within a cluster may increase sampling error.'],
['Why does increasing sample size fail to fix selection bias?','The problem concerns who can be selected, rather than how many people are selected. An online survey that excludes people without internet access remains unrepresentative of that excluded group even if it collects many more online responses.'],
['Propose a cleaning plan for the employee table in Lecture 2.','Inspect the missing salary. Check the negative age and suspicious salary against the source. Resolve conflicting identifiers, update stale records, investigate possible default heights and request a definition of SVC. Document corrections and recheck quality rather than deleting every potentially problematic row.'],
['Calculate the first expected count in the science-fiction/chess example and interpret the decision.','E = 450 × 300 / 1500 = 90. The sum of (O − E)² / E is approximately 507.94, with df = 1. Since this exceeds the critical value 10.83 at α = 0.001, reject independence and conclude that the variables are associated in this group. This does not establish causation.'],
['Why does r = 0 not prove independence?','Pearson measures linear association. If X is symmetric around zero and Y = X², the covariance and Pearson correlation can be zero even though Y is completely determined by X.'],
['Explain the difference between 93/165 and 93/207 in the heart crosstab.','93/165 is P(sex = 1 | target = 1), so its denominator counts all target = 1 records. 93/207 is P(target = 1 | sex = 1), so its denominator counts all sex = 1 records. The conditioning event determines the denominator.'],
['Select age and target for rows 10 through 15 using both loc and iloc.',"Use df.loc[10:15, ['age', 'target']] and df.iloc[10:16, [0, 13]]. They agree on the original RangeIndex. loc uses labels and includes the stop label; iloc uses positions and excludes the stop position."],
['Correct df[df.Segmentation.isin(["2", "1", "3"])].index.','Use integer labels: df.loc[df["Segmentation"].isin([2, 1, 3])]. This returns the matching rows. Choose the labels randomly when implementing cluster sampling. Appending .index returns the row index rather than the sampled records.'],
['Interpret the high correlation between Credit_Limit and Avg_Open_To_Buy.','The supplied data give r ≈ 0.99598. Avg_Open_To_Buy is approximately Credit_Limit minus Total_Revolving_Bal, so a derived definition helps explain the relationship. Investigate redundancy; a high r alone does not prove causation.'],
['How can you obtain a proportional stratified sample of exactly 500 records?','Calculate each exact share Nₕ/N × 500, take its floor and distribute the remaining records to the strata with the largest fractional remainders. For the displayed age intervals, the allocations are [36, 145, 205, 98, 16], which sum to 500.']
];
export function translateQuestions(questions,written){
 const arabicFormulaNotes={
  'lecture1-9':'نسبة الاستجابة تساوي عدد اللي ردّوا مقسومًا على عدد الأشخاص المختارين، ثم نضرب في 100: 120 ÷ 200 × 100 = 60%.',
  'lecture1-14':'نضرب حجم العينة في نسبة الطبقة: 400 × 0.25 = 100 شخص من هذه الطبقة.',
  'lecture2-9':'نجمع القيم ثم نقسم على عددها لحساب المتوسط: (4 + 8 + 15) ÷ 3 = 9.',
  'lecture2-13':'التكرار المتوقع يساوي مجموع الصف مضروبًا في مجموع العمود، ثم نقسم على المجموع الكلي: 450 × 300 ÷ 1500 = 90.',
  'lecture2-14':'درجات الحرية تساوي عدد الصفوف ناقص واحد، مضروبًا في عدد الأعمدة ناقص واحد: (2 − 1)(3 − 1) = 2.'
 };
 const indices={};
 for(const q of questions){let row;if(q.id.startsWith('ref-'))row=referenceTranslations[['ref-handbook-1','ref-handbook-2','ref-han-1','ref-han-2'].indexOf(q.id)];else{const i=indices[q.topic]||0;row=translations[q.topic][i];indices[q.topic]=i+1;}if(!row)throw new Error(`Missing English question: ${q.id}`);q.arabicExplanation=q.explanation;[q.text,q.options,q.explanation]=row;q.level={'تأسيسي':'Foundation','تطبيق':'Application','فهم':'Understanding'}[q.level];q.source=q.source.replace('مثال إضافي','supplemental example').replace('تصحيح مصطلح','terminology correction').replace('توضيح إضافي','additional explanation').replace('تطبيق إضافي','supplemental application');}
 for(const q of questions)if(arabicFormulaNotes[q.id])q.arabicExplanation=arabicFormulaNotes[q.id];
 written.forEach((w,i)=>{w.arabicExplanation=w.a;[w.q,w.a]=writtenTranslations[i];});
}
