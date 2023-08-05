export const networkDataTestDoc = `<?xml version="1.0" encoding="UTF-8"?>
<SCL xmlns="http://www.iec.ch/61850/2003/SCL" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" version="2007" revision="B" release="4">
	<Header id="Test"/>
	<Communication>
		<SubNetwork name="ProcessBus" desc="" type="8-MMS">
			<ConnectedAP iedName="SMV_Subscriber" apName="AP1"/>
			<ConnectedAP iedName="SMV_Publisher" apName="AP1">
				<SMV ldInst="CurrentTransformer" cbName="fullSmv">
					<Address>
					<P type="MAC-Address" xsi:type="tP_MAC-Address">01-0C-CD-04-00-03</P>
						<P type="VLAN-ID" xsi:type="tP_VLAN-ID">3EE</P>
						<P type="VLAN-PRIORITY" xsi:type="tP_VLAN-PRIORITY">4</P>
						<P type="APPID" xsi:type="tP_APPID">0003</P>
					</Address>
				</SMV>
				<SMV ldInst="CurrentTransformer" cbName="voltageOnly">
					<Address>
						<P type="MAC-Address" xsi:type="tP_MAC-Address">01-0C-CD-04-00-01</P>
						<P type="APPID" xsi:type="tP_APPID">0002</P>
					</Address>
				</SMV>
			</ConnectedAP>
			<ConnectedAP iedName="GOOSE_Publisher" apName="PP1">
				<GSE ldInst="QB2_Disconnector" cbName="GOOSE1">
					<Address>
						<P type="MAC-Address" xsi:type="tP_MAC-Address">01-0C-CD-01-00-01</P>
						<P type="APPID" xsi:type="tP_APPID">0002</P>
					</Address>
					<MinTime unit="s" multiplier="m">10</MinTime>
					<MaxTime unit="s" multiplier="m">1000</MaxTime>
				</GSE>
			</ConnectedAP>
			<ConnectedAP iedName="SMV_Publisher" apName="PP1">
				<SMV ldInst="CurrentTransformer" cbName="currrentOnlyDifferentAp">
					<Address>
						<P type="MAC-Address" xsi:type="tP_MAC-Address">01-0C-CD-04-00-02</P>
						<P type="VLAN-ID" xsi:type="tP_VLAN-ID">3EE</P>
						<P type="VLAN-PRIORITY" xsi:type="tP_VLAN-PRIORITY">4</P>
						<P type="APPID" xsi:type="tP_APPID">0003</P>
					</Address>
				</SMV>
			</ConnectedAP>
		</SubNetwork>
		<SubNetwork name="StationBus" desc="" type="8-MMS">
			<BitRate unit="b/s" multiplier="M">100</BitRate>
			<ConnectedAP iedName="GOOSE_Publisher" apName="AP1">
				<GSE ldInst="QB2_Disconnector" cbName="GOOSE2">
					<Address>
						<P type="MAC-Address" xsi:type="tP_MAC-Address">01-0C-CD-01-01-01</P>
						<P type="VLAN-ID" xsi:type="tP_VLAN-ID">3EE</P>
						<P type="VLAN-PRIORITY" xsi:type="tP_VLAN-PRIORITY">4</P>
						<P type="APPID" xsi:type="tP_APPID">0001</P>
					</Address>
					<MinTime unit="s" multiplier="m">10</MinTime>
					<MaxTime unit="s" multiplier="m">1000</MaxTime>
				</GSE>
			</ConnectedAP>
			<ConnectedAP iedName="GOOSE_Publisher2" apName="AP1">
				<GSE ldInst="QB2_Disconnector" cbName="GOOSE2">
					<Address>
						<P type="MAC-Address" xsi:type="tP_MAC-Address">01-0C-CD-01-00-01</P>
						<P type="APPID" xsi:type="tP_APPID">0002</P>
					</Address>
					<MinTime unit="s" multiplier="m">10</MinTime>
					<MaxTime unit="s" multiplier="m">1000</MaxTime>
				</GSE>
			</ConnectedAP>
		</SubNetwork>
	</Communication>
	<IED name="SMV_Publisher" manufacturer="Dummy">
		<AccessPoint name="AP1">
			<Server>
				<Authentication/>
				<LDevice inst="CurrentTransformer">
					<LN0 lnClass="LLN0" inst="" lnType="Dummy.LLN0">
						<DataSet name="fullSmvsDataSet">
							<FCDA ldInst="CurrentTransformer" prefix="L3" lnClass="TCTR" lnInst="3" doName="AmpSv" daName="instMag.i" fc="MX"/>
							<FCDA ldInst="CurrentTransformer" prefix="L3" lnClass="TCTR" lnInst="3" doName="AmpSv" daName="q" fc="MX"/>
							<FCDA ldInst="CurrentTransformer" prefix="L2" lnClass="TCTR" lnInst="2" doName="AmpSv" daName="instMag.i" fc="MX"/>
							<FCDA ldInst="CurrentTransformer" prefix="L2" lnClass="TCTR" lnInst="2" doName="AmpSv" daName="q" fc="MX"/>
							<FCDA ldInst="CurrentTransformer" prefix="L1" lnClass="TCTR" lnInst="1" doName="AmpSv" daName="instMag.i" fc="MX"/>
							<FCDA ldInst="CurrentTransformer" prefix="L1" lnClass="TCTR" lnInst="1" doName="AmpSv" daName="q" fc="MX"/>
							<FCDA ldInst="VoltageTransformer" prefix="L3" lnClass="TVTR" lnInst="3" doName="VolSv" daName="instMag.i" fc="MX"/>
							<FCDA ldInst="VoltageTransformer" prefix="L3" lnClass="TVTR" lnInst="3" doName="VolSv" daName="q" fc="MX"/>
							<FCDA ldInst="VoltageTransformer" prefix="L2" lnClass="TVTR" lnInst="2" doName="VolSv" daName="instMag.i" fc="MX"/>
							<FCDA ldInst="VoltageTransformer" prefix="L2" lnClass="TVTR" lnInst="2" doName="VolSv" daName="q" fc="MX"/>
							<FCDA ldInst="VoltageTransformer" prefix="L1" lnClass="TVTR" lnInst="1" doName="VolSv" daName="instMag.i" fc="MX"/>
							<FCDA ldInst="VoltageTransformer" prefix="L1" lnClass="TVTR" lnInst="1" doName="VolSv" daName="q" fc="MX"/>
						</DataSet>
						<DataSet name="voltageOnlysDataSet">
							<FCDA ldInst="VoltageTransformer" prefix="L1" lnClass="TVTR" lnInst="1" doName="VolSv" daName="instMag.i" fc="MX"/>
							<FCDA ldInst="VoltageTransformer" prefix="L1" lnClass="TVTR" lnInst="1" doName="VolSv" daName="q" fc="MX"/>
							<FCDA ldInst="VoltageTransformer" prefix="L2" lnClass="TVTR" lnInst="2" doName="VolSv" daName="instMag.i" fc="MX"/>
							<FCDA ldInst="VoltageTransformer" prefix="L2" lnClass="TVTR" lnInst="2" doName="VolSv" daName="q" fc="MX"/>
							<FCDA ldInst="VoltageTransformer" prefix="L3" lnClass="TVTR" lnInst="3" doName="VolSv" daName="instMag.i" fc="MX"/>
							<FCDA ldInst="VoltageTransformer" prefix="L3" lnClass="TVTR" lnInst="3" doName="VolSv" daName="q" fc="MX"/>
						</DataSet>
						<DataSet name="currrentOnlysDataSet">
							<FCDA ldInst="CurrentTransformer" prefix="L1" lnClass="TCTR" lnInst="1" doName="AmpSv" daName="instMag.i" fc="MX"/>
							<FCDA ldInst="CurrentTransformer" prefix="L1" lnClass="TCTR" lnInst="1" doName="AmpSv" daName="q" fc="MX"/>
							<FCDA ldInst="CurrentTransformer" prefix="L2" lnClass="TCTR" lnInst="2" doName="AmpSv" daName="instMag.i" fc="MX"/>
							<FCDA ldInst="CurrentTransformer" prefix="L2" lnClass="TCTR" lnInst="2" doName="AmpSv" daName="q" fc="MX"/>
							<FCDA ldInst="CurrentTransformer" prefix="L3" lnClass="TCTR" lnInst="3" doName="AmpSv" daName="instMag.i" fc="MX"/>
							<FCDA ldInst="CurrentTransformer" prefix="L3" lnClass="TCTR" lnInst="3" doName="AmpSv" daName="q" fc="MX"/>
						</DataSet>
						<SampledValueControl name="fullSmv" multicast="true" smvID="smv3" smpMod="SmpPerPeriod" smpRate="80" nofASDU="1" confRev="1" datSet="fullSmvsDataSet">
							<SmvOpts sampleRate="true" dataSet="true" synchSourceId="true"/>
						</SampledValueControl>
						<SampledValueControl name="voltageOnly" multicast="true" smvID="smv2" smpMod="SmpPerPeriod" smpRate="80" nofASDU="1" confRev="1" datSet="voltageOnlysDataSet">
							<SmvOpts sampleRate="true" dataSet="true" synchSourceId="true"/>
						</SampledValueControl>
						<SampledValueControl name="currrentOnly" multicast="true" smvID="firstSMV" smpMod="SmpPerPeriod" smpRate="80" nofASDU="1" confRev="1" datSet="currrentOnlysDataSet">
							<SmvOpts sampleRate="true" dataSet="true" synchSourceId="true"/>
						</SampledValueControl>
						<SampledValueControl name="currrentOnlyDifferentAp" multicast="true" smvID="firstSMV" smpMod="SmpPerPeriod" smpRate="80" nofASDU="1" confRev="1" datSet="currrentOnlysDataSet">
							<SmvOpts sampleRate="true" dataSet="true" synchSourceId="true"/>
						</SampledValueControl>
					</LN0>
					<LN prefix="L3" lnClass="TCTR" inst="1" lnType="Dummy.TCTR"/>
					<LN prefix="L2" lnClass="TCTR" inst="1" lnType="Dummy.TCTR"/>
					<LN prefix="RES" lnClass="TCTR" inst="1" lnType="Dummy.TCTR"/>
					<LN prefix="L1" lnClass="TCTR" inst="1" lnType="Dummy.TCTR"/>
				</LDevice>
				<LDevice inst="VoltageTransformer">
					<LN0 lnClass="LLN0" inst="" lnType="Dummy.LLN0"/>
					<LN prefix="L3" lnClass="TVTR" inst="1" lnType="Dummy.TVTR"/>
					<LN prefix="L2" lnClass="TVTR" inst="1" lnType="Dummy.TVTR"/>
					<LN prefix="RES" lnClass="TVTR" inst="1" lnType="Dummy.TVTR"/>
					<LN prefix="L1" lnClass="TVTR" inst="1" lnType="Dummy.TVTR"/>
				</LDevice>
			</Server>
		</AccessPoint>
		<AccessPoint desc="Process Bus" name="PP1">
			<ServerAt apName="AP1"/>
			<Services>
				<ClientServices goose="true" sv="true"/>
			</Services>
		</AccessPoint>
	</IED>
	<IED name="GOOSE_Publisher" desc="GOOSE publisher" manufacturer="Dummy">
		<AccessPoint name="AP1">
			<Server>
				<Authentication/>
				<LDevice inst="QB2_Disconnector" desc="Animalia">
					<LN0 lnClass="LLN0" inst="" lnType="Dummy.LLN0">
						<DataSet name="GOOSE2sDataSet">
							<FCDA ldInst="QB2_Disconnector" prefix="" lnClass="CSWI" lnInst="1" doName="Pos" daName="stVal" fc="ST"/>
							<FCDA ldInst="QB2_Disconnector" prefix="" lnClass="CSWI" lnInst="1" doName="Pos" daName="q" fc="ST"/>
						</DataSet>
						<DataSet name="GOOSE1sDataSet">
							<FCDA ldInst="QB1_Disconnector" prefix="" lnClass="CSWI" lnInst="1" doName="Pos" daName="stVal" fc="ST"/>
							<FCDA ldInst="QB1_Disconnector" prefix="" lnClass="CSWI" lnInst="1" doName="Pos" daName="q" fc="ST"/>
						</DataSet>
						<GSEControl name="GOOSE3" type="GOOSE" appID="GOOSE3" confRev="1" datSet="GOOSE1sDataSet"/>
						<GSEControl name="GOOSE2" type="GOOSE" appID="GOOSE2" confRev="1" datSet="GOOSE2sDataSet"/>
						<GSEControl name="GOOSE1" type="GOOSE" appID="GOOSE1" confRev="1" datSet="GOOSE1sDataSet"/>
					</LN0>
					<LN prefix="" lnClass="CILO" inst="1" lnType="Dummy.CILO" desc="Chordata"/>
					<LN lnClass="CSWI" inst="1" lnType="Dummy.CSWI" desc="Arthropoda"/>
					<LN prefix="" lnClass="XSWI" inst="1" lnType="Dummy.XSWI" desc="Nematoda"/>
				</LDevice>
				<LDevice inst="QB1_Disconnector">
					<LN0 lnClass="LLN0" inst="" lnType="Dummy.LLN0"/>
					<LN prefix="" lnClass="CILO" inst="1" lnType="Dummy.CILO"/>
					<LN prefix="" lnClass="CSWI" inst="1" lnType="Dummy.CSWI"/>
					<LN prefix="" lnClass="XSWI" inst="1" lnType="Dummy.XSWI"/>
				</LDevice>
			</Server>
		</AccessPoint>
		<AccessPoint desc="Process Bus" name="PP1">
			<ServerAt apName="AP1"/>
			<Services>
				<ClientServices goose="true" sv="true"/>
			</Services>
		</AccessPoint>
	</IED>
	<IED name="GOOSE_Publisher2" desc="GOOSE publisher" manufacturer="Dummy">
		<AccessPoint name="AP1">
			<Server>
				<Authentication/>
				<LDevice inst="QB2_Disconnector" desc="Animalia">
					<LN0 lnClass="LLN0" inst="" lnType="Dummy.LLN0">
						<DataSet name="GOOSE2sDataSet">
							<FCDA ldInst="QB2_Disconnector" prefix="" lnClass="CSWI" lnInst="1" doName="Pos" daName="stVal" fc="ST"/>
							<FCDA ldInst="QB2_Disconnector" prefix="" lnClass="CSWI" lnInst="1" doName="Pos" daName="q" fc="ST"/>
						</DataSet>
						<DataSet name="GOOSE1sDataSet">
							<FCDA ldInst="QB1_Disconnector" prefix="" lnClass="CSWI" lnInst="1" doName="Pos" daName="stVal" fc="ST"/>
							<FCDA ldInst="QB1_Disconnector" prefix="" lnClass="CSWI" lnInst="1" doName="Pos" daName="q" fc="ST"/>
						</DataSet>
						<GSEControl name="GOOSE3" type="GOOSE" appID="GOOSE3" confRev="1" datSet="GOOSE1sDataSet"/>
						<GSEControl name="GOOSE2" type="GOOSE" appID="GOOSE2" confRev="1" datSet="GOOSE2sDataSet"/>
						<GSEControl name="GOOSE1" type="GOOSE" appID="GOOSE1" confRev="1" datSet="GOOSE1sDataSet"/>
					</LN0>
					<LN prefix="" lnClass="CILO" inst="1" lnType="Dummy.CILO" desc="Chordata"/>
					<LN lnClass="CSWI" inst="1" lnType="Dummy.CSWI" desc="Arthropoda"/>
					<LN prefix="" lnClass="XSWI" inst="1" lnType="Dummy.XSWI" desc="Nematoda"/>
				</LDevice>
				<LDevice inst="QB1_Disconnector">
					<LN0 lnClass="LLN0" inst="" lnType="Dummy.LLN0"/>
					<LN prefix="" lnClass="CILO" inst="1" lnType="Dummy.CILO"/>
					<LN prefix="" lnClass="CSWI" inst="1" lnType="Dummy.CSWI"/>
					<LN prefix="" lnClass="XSWI" inst="1" lnType="Dummy.XSWI"/>
				</LDevice>
			</Server>
		</AccessPoint>
	</IED>
	<IED name="GOOSE_Subscriber" manufacturer="Dummy">
		<AccessPoint name="AP1">
			<Server>
				<Authentication/>
				<LDevice inst="Earth_Switch">
					<LN0 lnClass="LLN0" inst="" lnType="Dummy.LLN0">
						<Inputs>
							<ExtRef iedName="GOOSE_Publisher" serviceType="GOOSE" ldInst="QB2_Disconnector" lnClass="CSWI" lnInst="1" prefix="" doName="Pos" daName="stVal" srcLDInst="QB2_Disconnector" srcPrefix="" srcLNClass="LLN0" srcCBName="GOOSE2"/>
							<ExtRef iedName="GOOSE_Publisher2" serviceType="GOOSE" ldInst="QB2_Disconnector" lnClass="CSWI" lnInst="1" prefix="" doName="Pos" daName="q" srcLDInst="QB2_Disconnector" srcPrefix="" srcLNClass="LLN0" srcCBName="GOOSE2"/>
						</Inputs>
					</LN0>
					<LN prefix="" lnClass="CILO" inst="1" lnType="Dummy.CILO">
						<Inputs>
							<ExtRef iedName="SomethingNotPresent" intAddr="Pos;CSWI1/Pos/stVal" desc="Missing IED" serviceType="GOOSE" ldInst="QB2_Disconnector" lnClass="CSWI" lnInst="1" prefix="" doName="Pos" daName="stVal" srcLDInst="QB2_Disconnector" srcPrefix="" srcLNClass="LLN0" srcCBName="GOOSE2"/>
							<ExtRef iedName="GOOSE_Publisher" intAddr="Pos;CSWI1/Pos/q" desc="Missing attributes" serviceType="GOOSE" ldInst="QB2_Disconnector" lnClass="CSWI" lnInst="1" prefix="" daName="q" srcPrefix="" srcLNClass="LLN0" srcCBName="GOOSE2"/>
						</Inputs>
					</LN>
					<LN prefix="" lnClass="CSWI" inst="1" lnType="Dummy.CSWI">
						<Inputs>
							<ExtRef iedName="GOOSE_Publisher" serviceType="GOOSE" ldInst="QB2_Disconnector" lnClass="CSWI" lnInst="1" prefix="" doName="Pos" daName="stVal" srcLDInst="QB2_Disconnector" srcPrefix="" srcLNClass="LLN0" srcCBName="GOOSE2" intAddr="Pos;CSWI1/Pos/stVal" desc="Interlocking.Input2"/>
							<ExtRef iedName="GOOSE_Publisher" serviceType="GOOSE" ldInst="QB2_Disconnector" lnClass="CSWI" lnInst="1" prefix="" doName="Pos" daName="q" srcLDInst="QB2_Disconnector" srcPrefix="" srcLNClass="LLN0" srcCBName="GOOSE2DoesNotExist" intAddr="Pos;CSWI1/Pos/q" desc="Interlocking.Input2"/>
							<ExtRef intAddr="someRestrictedExtRef" desc="Restricted To Pos" pLN="CSWI" pDO="Pos" pDA="stVal" pServT="GOOSE"/>
						</Inputs>
					</LN>
					<LN prefix="" lnClass="XSWI" inst="1" lnType="Dummy.XSWI"/>
				</LDevice>
			</Server>
		</AccessPoint>
		<AccessPoint desc="Process Bus" name="PP1">
			<ServerAt apName="AP1"/>
			<Services>
				<ClientServices goose="true" sv="true"/>
			</Services>
		</AccessPoint>
	</IED>
	<IED xmlns="http://www.iec.ch/61850/2003/SCL" name="SMV_Subscriber" manufacturer="Dummy">
		<Services>
			<SupSubscription maxSv="4" maxGo="0"/>
		</Services>
		<AccessPoint name="AP1">
			<Server>
				<Authentication/>
				<LDevice inst="Overvoltage">
					<LN0 lnClass="LLN0" inst="" lnType="Dummy.LLN0"/>
					<LN prefix="" lnClass="PTRC" inst="1" lnType="Summy.PTRC">
						<Inputs>
							<ExtRef intAddr="AmpSv;TCTR1/AmpSv/instMag.i" desc="MeasPoint.CT1"/>
							<ExtRef intAddr="AmpSv;TCTR1/AmpSv/q" desc="MeasPoint.CT1"/>
							<ExtRef intAddr="AmpSv;TCTR2/AmpSv/instMag.i" desc="MeasPoint.CT2" iedName="SMV_Publisher" ldInst="CurrentTransformer" prefix="L3" lnClass="TCTR" lnInst="3" doName="AmpSv" daName="instMag.i" srcLDInst="CurrentTransformer" srcPrefix="NoMatch" srcLNClass="LLN0" srcCBName="fullSmv" serviceType="SMV"/>
							<ExtRef intAddr="AmpSv;TCTR2/AmpSv/q" desc="MeasPoint.CT1"/>
							<ExtRef intAddr="AmpSv;TCTR3/AmpSv/instMag.i" desc="MeasPoint.CT3" iedName="SMV_Publisher" ldInst="CurrentTransformer" prefix="L3" lnClass="TCTR" lnInst="3" doName="AmpSv" daName="instMag.i" srcLDInst="CurrentTransformer" srcPrefix="" srcLNClass="LLN0" srcCBName="fullSmv" serviceType="SMV"/>
							<ExtRef intAddr="AmpSv;TCTR3/AmpSv/q" desc="MeasPoint.CT1" serviceType="SMV" iedName="SMV_Publisher" ldInst="CurrentTransformer" prefix="L3" lnClass="TCTR" lnInst="3" doName="AmpSv" daName="q" srcLDInst="CurrentTransformer" srcPrefix="" srcLNClass="LLN0" srcCBName="fullSmv"/>
							<ExtRef intAddr="sillyLikeA" serviceType="GOOSE"/>
						</Inputs>
					</LN>
				</LDevice>
				<LDevice inst="Overcurrent">
					<LN0 lnClass="LLN0" inst="" lnType="Dummy.LLN0"/>
					<LN prefix="" lnClass="PTRC" inst="1" lnType="Summy.PTRC">
						<Inputs>
							<ExtRef intAddr="VolSv;TVTR1/VolSv/instMag.i" desc="MeasPoint.VT1" serviceType="SMV"/>
							<ExtRef intAddr="VolSv;TVTR1/VolSv/q" desc="MeasPoint.VT1"/>
							<ExtRef intAddr="VolSv;TVTR2/VolSv/instMag.i" desc="MeasPoint.VT2"/>
							<ExtRef intAddr="VolSv;TVTR2/VolSv/q" desc="MeasPoint.VT1"/>
							<ExtRef intAddr="VolSv;TVTR3/VolSv/instMag.i" desc="MeasPoint.VT3"/>
							<ExtRef intAddr="VolSv;TVTR3/VolSv/q" desc="MeasPoint.VT1"/>
							<ExtRef intAddr="someRestrictedExtRef" desc="Restricted To AmpSV" pLN="TCTR" pDO="AmpSV" pDA="instMag.i"/>
						</Inputs>
					</LN>
				</LDevice>
				<LDevice inst="SV_supervision">
					<LN0 lnClass="LLN0" inst="" lnType="Dummy.LLN0"/>
					<LN lnClass="LSVS" inst="1" lnType="Dummy.LSVS">
						<DOI name="SvCBRef">
							<DAI name="setSrcRef">
								<Val>SMV_Publisher2CurrentTransformer/LLN0.fullSmv</Val>
							</DAI>
						</DOI>
					</LN>
					<LN lnClass="LSVS" inst="2" lnType="Dummy.LSVS">
						<Private type="OpenSCD.create"/>
						<DOI name="SvCBRef">
							<DAI name="setSrcRef">
								<Val>SMV_Publisher2CurrentTransformer/LLN0.voltageOnly</Val>
							</DAI>
						</DOI>
					</LN>
					<LN lnClass="LSVS" lnType="Dummy.LSVS" inst="3">
						<Private type="OpenSCD.create"/>
						<DOI name="SvCBRef">
							<DAI name="setSrcRef">
								<Val>SMV_PublisherCurrentTransformer/LLN0.fullSmv</Val>
							</DAI>
						</DOI>
					</LN>
				</LDevice>
			</Server>
		</AccessPoint>
		<AccessPoint desc="Process Bus" name="PP1">
			<ServerAt apName="AP1"/>
			<Services>
				<ClientServices goose="true" sv="true"/>
			</Services>
		</AccessPoint>
	</IED>
	<DataTypeTemplates>
		<LNodeType lnClass="PTRC" id="Summy.PTRC" desc="Trip conditioning: General trip signal">
			<DO name="Mod" type="OpenSCD_ENC_Mod"/>
			<DO name="Beh" type="OpenSCD_ENS_Beh"/>
			<DO name="Health" type="OpenSCD_ENS_Health"/>
			<DO name="NamPlt" type="OpenSCD_LPL_noLD"/>
			<DO name="Tr" type="OpenSCD_ACT_general"/>
			<DO name="Op" transient="true" type="OpenSCD_ACT_general"/>
			<DO name="Str" type="OpenSCD_ACD_general"/>
		</LNodeType>
		<LNodeType lnClass="LSVS" id="Dummy.LSVS">
			<DO name="SvCBRef" type="Dummy.ORG"/>
			<DO name="St" type="OpenSCD_SPS_simple"/>
			<DO name="Mod" type="OpenSCD_ENC_Mod"/>
			<DO name="Health" type="OpenSCD_ENS_Health"/>
			<DO name="Beh" type="OpenSCD_ENS_Beh"/>
			<DO name="NamPlt" type="OpenSCD_LPL_noLD"/>
		</LNodeType>
		<LNodeType lnClass="TCTR" id="Dummy.TCTR" desc="Current transformer">
			<DO name="Rat" type="Dummy.ASG"/>
			<DO name="ARtgSec" type="Dummy.ING"/>
			<DO name="ARtgNom" type="OpenSCD_ASG_ATrg_TCTR"/>
			<DO name="Mod" type="OpenSCD_ENC_Mod"/>
			<DO name="Beh" type="OpenSCD_ENS_Beh"/>
			<DO name="Health" type="OpenSCD_ENS_Health"/>
			<DO name="NamPlt" type="OpenSCD_LPL_noLD"/>
			<DO name="AmpSv" type="OpenSCD_SAV_AmpSv_TCTR"/>
			<DO name="ARtg" type="OpenSCD_ASG_ATrg_TCTR"/>
			<DO name="HzRtg" type="OpenSCD_ASG_HzRtg_TCTR"/>
		</LNodeType>
		<LNodeType lnClass="TVTR" id="Dummy.TVTR" desc="Voltage transformer">
			<DO name="Rat" type="Dummy.ASG"/>
			<DO name="VRtgSec" type="Dummy.ING"/>
			<DO name="Mod" type="OpenSCD_ENC_Mod"/>
			<DO name="Beh" type="OpenSCD_ENS_Beh"/>
			<DO name="Health" type="OpenSCD_ENS_Health"/>
			<DO name="NamPlt" type="OpenSCD_LPL_noLD"/>
			<DO name="VolSv" type="OpenSCD_SAV_VolSv_TVTR"/>
			<DO name="VRtg" type="OpenSCD_ASG_VRtg_TVTR"/>
			<DO name="HzRtg" type="OpenSCD_ASG_HzRtg_TCTR"/>
		</LNodeType>
		<LNodeType lnClass="LGOS" id="Dummy.LGOS">
			<DO name="GoCBRef" type="Dummy.ORG"/>
			<DO name="St" type="OpenSCD_SPS_simple"/>
			<DO name="Mod" type="OpenSCD_ENC_Mod"/>
			<DO name="Health" type="OpenSCD_ENS_Health"/>
			<DO name="Beh" type="OpenSCD_ENS_Beh"/>
			<DO name="NamPlt" type="OpenSCD_LPL_noLD"/>
		</LNodeType>
		<LNodeType lnClass="LGOS" id="Dummy.LGOS1">
			<DO name="GoCBRef" type="Dummy.ORG1"/>
			<DO name="LikeGoCBRef" type="Dummy.ORG1"/>
			<DO name="St" type="OpenSCD_SPS_simple"/>
			<DO name="Mod" type="OpenSCD_ENC_Mod"/>
			<DO name="Health" type="OpenSCD_ENS_Health"/>
			<DO name="Beh" type="OpenSCD_ENS_Beh"/>
			<DO name="NamPlt" type="OpenSCD_LPL_noLD"/>
		</LNodeType>
		<LNodeType lnClass="LGOS" id="Dummy.LGOS2">
			<DO name="GoCBRef" type="Dummy.ORG2"/>
			<DO name="St" type="OpenSCD_SPS_simple"/>
			<DO name="Mod" type="OpenSCD_ENC_Mod"/>
			<DO name="Health" type="OpenSCD_ENS_Health"/>
			<DO name="Beh" type="OpenSCD_ENS_Beh"/>
			<DO name="NamPlt" type="OpenSCD_LPL_noLD"/>
		</LNodeType>
		<LNodeType lnClass="XSWI" id="Dummy.XSWI" desc="Switch: one phase represenation">
			<DO name="Mod" type="OpenSCD_ENC_Mod"/>
			<DO name="Beh" type="OpenSCD_ENS_Beh"/>
			<DO name="Health" type="OpenSCD_ENS_Health"/>
			<DO name="NamPlt" type="OpenSCD_LPL_noLD"/>
			<DO name="LocKey" type="OpenSCD_SPS_simple"/>
			<DO name="Loc" type="OpenSCD_SPS_simple"/>
			<DO name="OpCnt" type="OpenSCD_INS_simple"/>
			<DO name="Pos" type="OpenSCD_DPC_statusonly"/>
			<DO name="BlkOpn" type="OpenSCD_SPC_statusonly"/>
			<DO name="BlkCls" type="OpenSCD_SPC_statusonly"/>
			<DO name="SwTyp" type="OpenSCD_ENS_SwTyp"/>
		</LNodeType>
		<LNodeType lnClass="CSWI" id="Dummy.CSWI" desc="Switch control: no process bus(PB)">
			<DO name="Mod" type="OpenSCD_ENC_Mod"/>
			<DO name="Beh" type="OpenSCD_ENS_Beh"/>
			<DO name="Health" type="OpenSCD_ENS_Health"/>
			<DO name="NamPlt" type="OpenSCD_LPL_noLD"/>
			<DO name="LocKey" type="OpenSCD_SPS_simple"/>
			<DO name="Loc" type="OpenSCD_SPS_simple"/>
			<DO name="Pos" type="OpenSCD_DPC"/>
		</LNodeType>
		<LNodeType lnClass="CILO" id="Dummy.CILO" desc="Interlocking">
			<DO name="Mod" type="OpenSCD_ENC_Mod"/>
			<DO name="Beh" type="OpenSCD_ENS_Beh"/>
			<DO name="Health" type="OpenSCD_ENS_Health"/>
			<DO name="NamPlt" type="OpenSCD_LPL_noLD"/>
			<DO name="EnaOpn" type="OpenSCD_SPS_simple"/>
			<DO name="EnaCls" type="OpenSCD_SPS_simple"/>
		</LNodeType>
		<LNodeType lnClass="LLN0" id="Dummy.LLN0" desc="Logical device LN: parent">
			<DO name="Mod" type="OpenSCD_ENC_Mod"/>
			<DO name="Beh" type="OpenSCD_ENS_Beh"/>
			<DO name="Health" type="OpenSCD_ENS_Health"/>
			<DO name="NamPlt" type="OpenSCD_LPL_LD"/>
			<DO name="LocKey" type="OpenSCD_SPS_simple"/>
			<DO name="Loc" type="OpenSCD_SPS_simple"/>
		</LNodeType>
		<DOType cdc="ACT" id="OpenSCD_ACT_general">
			<DA name="general" bType="BOOLEAN" dchg="true" fc="ST"/>
			<DA name="q" bType="Quality" qchg="true" fc="ST"/>
			<DA name="t" bType="Timestamp" fc="ST"/>
		</DOType>
		<DOType cdc="ACD" id="OpenSCD_ACD_general">
			<DA name="general" bType="BOOLEAN" dchg="true" fc="ST"/>
			<DA name="dirGeneral" bType="Enum" dchg="true" type="FaultDirectionKind" fc="ST"/>
			<DA name="q" bType="Quality" qchg="true" fc="ST"/>
			<DA name="t" bType="Timestamp" fc="ST"/>
		</DOType>
		<DOType cdc="SAV" id="OpenSCD_SAV_AmpSv_TCTR">
			<DA name="instMag" bType="Struct" type="OpenSCD_AnalogueValue_INT32" fc="MX"/>
			<DA name="q" bType="Quality" qchg="true" fc="MX"/>
			<DA name="t" bType="Timestamp" fc="MX"/>
			<DA name="units" bType="Struct" dchg="true" type="Unit" fc="CF"/>
			<DA name="sVC" bType="Struct" dchg="true" type="OpenSCD_ScaledValueConfig_AmpSv" fc="CF"/>
		</DOType>
		<DOType cdc="ASG" id="OpenSCD_ASG_ATrg_TCTR">
			<DA name="setMag" bType="Struct" type="Dummy.AnVal32" fc="SP"/>
			<DA name="units" bType="Struct" dchg="true" type="OpenSCD_Unit_A" fc="CF"/>
			<DA name="q" bType="Quality" qchg="true" fc="ST"/>
			<DA name="t" bType="Timestamp" fc="ST"/>
		</DOType>
		<DOType cdc="ASG" id="OpenSCD_ASG_HzRtg_TCTR">
			<DA name="setMag" bType="Struct" type="OpenSCD_AnalogueValue_INT32" fc="SP"/>
			<DA name="units" bType="Struct" dchg="true" type="OpenSCD_Unit_Hz" fc="CF"/>
			<DA name="sVC" bType="Struct" dchg="true" type="ScaledValueConfig" fc="CF"/>
			<DA name="q" bType="Quality" qchg="true" fc="ST"/>
			<DA name="t" bType="Timestamp" fc="ST"/>
		</DOType>
		<DOType cdc="SAV" id="OpenSCD_SAV_VolSv_TVTR">
			<DA name="instMag" bType="Struct" type="OpenSCD_AnalogueValue_INT32" fc="MX"/>
			<DA name="q" bType="Quality" qchg="true" fc="MX"/>
			<DA name="t" bType="Timestamp" fc="MX"/>
			<DA name="units" bType="Struct" dchg="true" type="Unit" fc="CF"/>
			<DA name="sVC" bType="Struct" dchg="true" type="OpenSCD_ScaledValueConfig_VolSv" fc="CF"/>
		</DOType>
		<DOType cdc="ASG" id="OpenSCD_ASG_VRtg_TVTR">
			<DA name="setMag" bType="Struct" type="Dummy.AnVal32" fc="SP"/>
			<DA name="units" bType="Struct" dchg="true" type="OpenSCD_Unit_V" fc="CF"/>
			<DA name="q" bType="Quality" qchg="true" fc="ST"/>
			<DA name="t" bType="Timestamp" fc="ST"/>
		</DOType>
		<DOType cdc="ING" id="Dummy.ING">
			<DA name="setVal" bType="INT32" dchg="true" fc="SP"/>
			<DA name="q" bType="Quality" qchg="true" fc="ST"/>
			<DA name="t" bType="Timestamp" fc="ST"/>
			<DA name="d" bType="VisString255" fc="DC"/>
		</DOType>
		<DOType id="Dummy.ASG" cdc="ASG">
			<DA name="setMag" bType="Struct" type="Dummy.AnVal32" fc="SP" dchg="true"/>
			<DA name="q" bType="Quality" fc="SP" qchg="true"/>
			<DA name="t" bType="Timestamp" fc="SP"/>
		</DOType>
		<DOType cdc="ORG" id="Dummy.ORG">
			<DA name="setSrcRef" bType="ObjRef" dchg="true" valKind="RO" valImport="true" fc="SP"/>
		</DOType>
		<DOType cdc="ORG" id="Dummy.ORG1">
			<DA name="setSrcRef" bType="ObjRef" dchg="true" valKind="Conf" valImport="true" fc="SP"/>
		</DOType>
		<DOType cdc="ORG" id="Dummy.ORG2">
			<DA name="setSrcRef" bType="ObjRef" dchg="true" fc="SP"/>
		</DOType>
		<DOType cdc="ENS" id="OpenSCD_ENS_SwTyp">
			<DA fc="ST" dchg="true" name="stVal" bType="Enum" type="SwitchFunctionKind"/>
			<DA fc="ST" qchg="true" name="q" bType="Quality"/>
			<DA fc="ST" name="t" bType="Timestamp"/>
		</DOType>
		<DOType cdc="SPC" id="OpenSCD_SPC_statusonly">
			<DA name="stVal" bType="BOOLEAN" dchg="true" fc="ST"/>
			<DA name="q" bType="Quality" qchg="true" fc="ST"/>
			<DA name="t" bType="Timestamp" fc="ST"/>
			<DA name="ctlModel" bType="Enum" dchg="true" type="OpenSCD_StatusOnly" fc="CF">
				<Val>status-only</Val>
			</DA>
		</DOType>
		<DOType cdc="DPC" id="OpenSCD_DPC_statusonly">
			<DA name="stVal" bType="Dbpos" dchg="true" fc="ST"/>
			<DA name="q" bType="Quality" qchg="true" fc="ST"/>
			<DA name="t" bType="Timestamp" fc="ST"/>
			<DA name="ctlModel" bType="Enum" fc="CF" type="OpenSCD_StatusOnly">
				<Val>status-only</Val>
			</DA>
		</DOType>
		<DOType cdc="INS" id="OpenSCD_INS_simple">
			<DA name="stVal" bType="INT32" dchg="true" fc="ST"/>
			<DA name="q" bType="Quality" qchg="true" fc="ST"/>
			<DA name="t" bType="Timestamp" fc="ST"/>
			<DA name="d" bType="VisString255" fc="DC"/>
		</DOType>
		<DOType cdc="DPC" id="OpenSCD_DPC">
			<DA name="origin" bType="Struct" dchg="true" fc="ST" type="OpenSCD_Originator"/>
			<DA name="stVal" bType="Dbpos" dchg="true" fc="ST"/>
			<DA name="q" bType="Quality" qchg="true" fc="ST"/>
			<DA name="t" bType="Timestamp" fc="ST"/>
			<DA name="ctlModel" bType="Enum" fc="CF" type="CtlModelKind">
				<Val>sbo-with-enhanced-security</Val>
			</DA>
			<DA name="sboTimeout" bType="INT32U" fc="CF">
				<Val>30000</Val>
			</DA>
			<DA name="operTimeout" bType="INT32U" fc="CF">
				<Val>600</Val>
			</DA>
			<DA name="pulseConfig" bType="Struct" fc="CO" type="OpenSCD_PulseConfig"/>
			<DA name="SBOw" bType="Struct" fc="CO" type="OpenSCD_OperSBOw_Dbpos"/>
			<DA name="Oper" bType="Struct" fc="CO" type="OpenSCD_OperSBOw_Dbpos"/>
			<DA name="Cancel" bType="Struct" fc="CO" type="OpenSCD_Cancel_Dbpos"/>
		</DOType>
		<DOType cdc="LPL" id="OpenSCD_LPL_noLD">
			<DA name="vendor" bType="VisString255" fc="DC"/>
			<DA name="swRev" bType="VisString255" fc="DC"/>
			<DA name="d" bType="VisString255" fc="DC"/>
			<DA name="configRev" bType="VisString255" fc="DC"/>
		</DOType>
		<DOType cdc="SPS" id="OpenSCD_SPS_simple">
			<DA name="stVal" bType="BOOLEAN" dchg="true" fc="ST"/>
			<DA name="q" bType="Quality" qchg="true" fc="ST"/>
			<DA name="t" bType="Timestamp" fc="ST"/>
			<DA name="d" bType="VisString255" fc="DC"/>
		</DOType>
		<DOType cdc="LPL" id="OpenSCD_LPL_LD">
			<DA name="vendor" bType="VisString255" fc="DC"/>
			<DA name="swRev" bType="VisString255" fc="DC"/>
			<DA name="d" bType="VisString255" fc="DC"/>
			<DA name="configRev" bType="VisString255" fc="DC"/>
			<DA name="ldNs" bType="VisString255" fc="EX">
				<Val>IEC 61850-7-4:2007B4</Val>
			</DA>
		</DOType>
		<DOType cdc="ENS" id="OpenSCD_ENS_Health">
			<DA name="stVal" bType="Enum" dchg="true" fc="ST" type="HealthKind"/>
			<DA name="q" bType="Quality" qchg="true" fc="ST"/>
			<DA name="t" bType="Timestamp" fc="ST"/>
		</DOType>
		<DOType cdc="ENS" id="OpenSCD_ENS_Beh">
			<DA name="stVal" bType="Enum" dchg="true" fc="ST" type="BehaviourModeKind"/>
			<DA name="q" bType="Quality" qchg="true" fc="ST"/>
			<DA name="t" bType="Timestamp" fc="ST"/>
		</DOType>
		<DOType cdc="ENC" id="OpenSCD_ENC_Mod">
			<DA name="origin" bType="Struct" dchg="true" fc="ST" type="OpenSCD_Originator"/>
			<DA name="stVal" bType="Enum" dchg="true" fc="ST" type="BehaviourModeKind"/>
			<DA name="q" bType="Quality" qchg="true" fc="ST"/>
			<DA name="t" bType="Timestamp" fc="ST"/>
			<DA name="ctlModel" bType="Enum" fc="CF" type="CtlModelKind">
				<Val>sbo-with-enhanced-security</Val>
			</DA>
			<DA name="sboTimeout" bType="INT32U" fc="CF">
				<Val>30000</Val>
			</DA>
			<DA name="operTimeout" bType="INT32U" fc="CF">
				<Val>600</Val>
			</DA>
			<DA name="SBOw" bType="Struct" fc="CO" type="OpenSCD_OperSBOw_BehaviourModeKind"/>
			<DA name="Oper" bType="Struct" fc="CO" type="OpenSCD_OperSBOw_BehaviourModeKind"/>
			<DA name="Cancel" bType="Struct" fc="CO" type="OpenSCD_Cancel_BehaviourModeKind"/>
		</DOType>
		<DAType id="OpenSCD_AnalogueValue_INT32">
			<BDA name="i" bType="INT32"/>
		</DAType>
		<DAType id="Unit">
			<BDA name="SIUnit" bType="Enum" type="SIUnitKind"/>
			<BDA name="multiplier" bType="Enum" type="MultiplierKind"/>
		</DAType>
		<DAType id="OpenSCD_ScaledValueConfig_AmpSv">
			<BDA name="scaleFactor" bType="FLOAT32">
				<Val>0.001</Val>
			</BDA>
			<BDA name="offset" bType="FLOAT32">
				<Val>0</Val>
			</BDA>
		</DAType>
		<DAType id="OpenSCD_Unit_A">
			<BDA name="SIUnit" bType="Enum" type="SIUnitKind">
				<Val>A</Val>
			</BDA>
		</DAType>
		<DAType id="ScaledValueConfig">
			<BDA name="scaleFactor" bType="FLOAT32"/>
			<BDA name="offset" bType="FLOAT32"/>
		</DAType>
		<DAType id="OpenSCD_Unit_Hz">
			<BDA name="SIUnit" bType="Enum" type="SIUnitKind">
				<Val>Hz</Val>
			</BDA>
		</DAType>
		<DAType id="OpenSCD_ScaledValueConfig_VolSv">
			<BDA name="scaleFactor" bType="FLOAT32">
				<Val>0.01</Val>
			</BDA>
			<BDA name="offset" bType="FLOAT32">
				<Val>0</Val>
			</BDA>
		</DAType>
		<DAType id="OpenSCD_Unit_V">
			<BDA name="SIUnit" bType="Enum" type="SIUnitKind">
				<Val>A</Val>
			</BDA>
		</DAType>
		<DAType id="Dummy.AnVal32">
			<BDA name="f" bType="FLOAT32"/>
		</DAType>
		<DAType id="OpenSCD_Cancel_Dbpos">
			<BDA name="ctlVal" bType="Dbpos"/>
			<BDA name="origin" bType="Struct" type="OpenSCD_Originator"/>
			<BDA name="ctlNum" bType="INT8U"/>
			<BDA name="T" bType="Timestamp"/>
			<BDA name="Test" bType="BOOLEAN"/>
			<ProtNs type="8-MMS">IEC 61850-8-1:2003</ProtNs>
		</DAType>
		<DAType id="OpenSCD_OperSBOw_Dbpos">
			<BDA name="ctlVal" bType="Dbpos"/>
			<BDA name="origin" bType="Struct" type="OpenSCD_Originator"/>
			<BDA name="ctlNum" bType="INT8U"/>
			<BDA name="T" bType="Timestamp"/>
			<BDA name="Test" bType="BOOLEAN"/>
			<BDA name="Check" bType="Check"/>
			<ProtNs type="8-MMS">IEC 61850-8-1:2003</ProtNs>
		</DAType>
		<DAType id="OpenSCD_PulseConfig">
			<BDA name="cmdQual" bType="Enum" type="OutputSignalKind"/>
			<BDA name="onDur" bType="INT32U"/>
			<BDA name="offDur" bType="INT32U"/>
			<BDA name="numPls" bType="INT32U"/>
		</DAType>
		<DAType id="OpenSCD_Cancel_BehaviourModeKind">
			<BDA name="ctlVal" bType="Enum" type="BehaviourModeKind"/>
			<BDA name="origin" bType="Struct" type="OpenSCD_Originator"/>
			<BDA name="ctlNum" bType="INT8U"/>
			<BDA name="T" bType="Timestamp"/>
			<BDA name="Test" bType="BOOLEAN"/>
			<ProtNs type="8-MMS">IEC 61850-8-1:2003</ProtNs>
		</DAType>
		<DAType id="OpenSCD_OperSBOw_BehaviourModeKind">
			<BDA name="ctlVal" bType="Enum" type="BehaviourModeKind"/>
			<BDA name="origin" bType="Struct" type="OpenSCD_Originator"/>
			<BDA name="ctlNum" bType="INT8U"/>
			<BDA name="T" bType="Timestamp"/>
			<BDA name="Test" bType="BOOLEAN"/>
			<BDA name="Check" bType="Check"/>
			<ProtNs type="8-MMS">IEC 61850-8-1:2003</ProtNs>
		</DAType>
		<DAType id="OpenSCD_Originator">
			<BDA name="orCat" bType="Enum" type="OriginatorCategoryKind"/>
			<BDA name="orIdent" bType="Octet64"/>
		</DAType>
		<EnumType id="FaultDirectionKind">
			<EnumVal ord="0">unknown</EnumVal>
			<EnumVal ord="1">forward</EnumVal>
			<EnumVal ord="2">backward</EnumVal>
			<EnumVal ord="3">both</EnumVal>
		</EnumType>
		<EnumType id="SIUnitKind">
			<EnumVal ord="1"/>
			<EnumVal ord="2">m</EnumVal>
			<EnumVal ord="3">kg</EnumVal>
			<EnumVal ord="4">s</EnumVal>
			<EnumVal ord="5">A</EnumVal>
			<EnumVal ord="6">K</EnumVal>
			<EnumVal ord="7">mol</EnumVal>
			<EnumVal ord="8">cd</EnumVal>
			<EnumVal ord="9">deg</EnumVal>
			<EnumVal ord="10">rad</EnumVal>
			<EnumVal ord="11">sr</EnumVal>
			<EnumVal ord="21">Gy</EnumVal>
			<EnumVal ord="22">Bq</EnumVal>
			<EnumVal ord="23">°C</EnumVal>
			<EnumVal ord="24">Sv</EnumVal>
			<EnumVal ord="25">F</EnumVal>
			<EnumVal ord="26">C</EnumVal>
			<EnumVal ord="27">S</EnumVal>
			<EnumVal ord="28">H</EnumVal>
			<EnumVal ord="29">V</EnumVal>
			<EnumVal ord="30">ohm</EnumVal>
			<EnumVal ord="31">J</EnumVal>
			<EnumVal ord="32">N</EnumVal>
			<EnumVal ord="33">Hz</EnumVal>
			<EnumVal ord="34">lx</EnumVal>
			<EnumVal ord="35">Lm</EnumVal>
			<EnumVal ord="36">Wb</EnumVal>
			<EnumVal ord="37">T</EnumVal>
			<EnumVal ord="38">W</EnumVal>
			<EnumVal ord="39">Pa</EnumVal>
			<EnumVal ord="41">m²</EnumVal>
			<EnumVal ord="42">m³</EnumVal>
			<EnumVal ord="43">m/s</EnumVal>
			<EnumVal ord="44">m/s²</EnumVal>
			<EnumVal ord="45">m³/s</EnumVal>
			<EnumVal ord="46">m/m³</EnumVal>
			<EnumVal ord="47">M</EnumVal>
			<EnumVal ord="48">kg/m³</EnumVal>
			<EnumVal ord="49">m²/s</EnumVal>
			<EnumVal ord="50">W/m K</EnumVal>
			<EnumVal ord="51">J/K</EnumVal>
			<EnumVal ord="52">ppm</EnumVal>
			<EnumVal ord="53">1/s</EnumVal>
			<EnumVal ord="54">rad/s</EnumVal>
			<EnumVal ord="55">W/m²</EnumVal>
			<EnumVal ord="56">J/m²</EnumVal>
			<EnumVal ord="57">S/m</EnumVal>
			<EnumVal ord="58">K/s</EnumVal>
			<EnumVal ord="59">Pa/s</EnumVal>
			<EnumVal ord="60">J/kg K</EnumVal>
			<EnumVal ord="61">VA</EnumVal>
			<EnumVal ord="62">Watts</EnumVal>
			<EnumVal ord="63">VAr</EnumVal>
			<EnumVal ord="64">phi</EnumVal>
			<EnumVal ord="65">cos(phi)</EnumVal>
			<EnumVal ord="66">Vs</EnumVal>
			<EnumVal ord="67">V²</EnumVal>
			<EnumVal ord="68">As</EnumVal>
			<EnumVal ord="69">A²</EnumVal>
			<EnumVal ord="70">A²t</EnumVal>
			<EnumVal ord="71">VAh</EnumVal>
			<EnumVal ord="72">Wh</EnumVal>
			<EnumVal ord="73">VArh</EnumVal>
			<EnumVal ord="74">V/Hz</EnumVal>
			<EnumVal ord="75">Hz/s</EnumVal>
			<EnumVal ord="76">char</EnumVal>
			<EnumVal ord="77">char/s</EnumVal>
			<EnumVal ord="78">kgm²</EnumVal>
			<EnumVal ord="79">dB</EnumVal>
			<EnumVal ord="80">J/Wh</EnumVal>
			<EnumVal ord="81">W/s</EnumVal>
			<EnumVal ord="82">l/s</EnumVal>
			<EnumVal ord="83">dBm</EnumVal>
			<EnumVal ord="84">h</EnumVal>
			<EnumVal ord="85">min</EnumVal>
			<EnumVal ord="86">Ohm/m</EnumVal>
			<EnumVal ord="87">percent/s</EnumVal>
		</EnumType>
		<EnumType id="MultiplierKind">
			<EnumVal ord="-24">y</EnumVal>
			<EnumVal ord="-21">z</EnumVal>
			<EnumVal ord="-18">a</EnumVal>
			<EnumVal ord="-15">f</EnumVal>
			<EnumVal ord="-12">p</EnumVal>
			<EnumVal ord="-9">n</EnumVal>
			<EnumVal ord="-6">µ</EnumVal>
			<EnumVal ord="-3">m</EnumVal>
			<EnumVal ord="-2">c</EnumVal>
			<EnumVal ord="-1">d</EnumVal>
			<EnumVal ord="0"/>
			<EnumVal ord="1">da</EnumVal>
			<EnumVal ord="2">h</EnumVal>
			<EnumVal ord="3">k</EnumVal>
			<EnumVal ord="6">M</EnumVal>
			<EnumVal ord="9">G</EnumVal>
			<EnumVal ord="12">T</EnumVal>
			<EnumVal ord="15">P</EnumVal>
			<EnumVal ord="18">E</EnumVal>
			<EnumVal ord="21">Z</EnumVal>
			<EnumVal ord="24">Y</EnumVal>
		</EnumType>
		<EnumType id="SwitchFunctionKind">
			<EnumVal ord="1">Load Break</EnumVal>
			<EnumVal ord="2">Disconnector</EnumVal>
			<EnumVal ord="3">Earthing Switch</EnumVal>
			<EnumVal ord="4">High Speed Earthing Switch</EnumVal>
		</EnumType>
		<EnumType id="OpenSCD_StatusOnly">
			<EnumVal ord="0">status-only</EnumVal>
		</EnumType>
		<EnumType id="OutputSignalKind">
			<EnumVal ord="0">pulse</EnumVal>
			<EnumVal ord="1">persistent</EnumVal>
			<EnumVal ord="2">persistent-feedback</EnumVal>
		</EnumType>
		<EnumType id="HealthKind">
			<EnumVal ord="1">Ok</EnumVal>
			<EnumVal ord="2">Warning</EnumVal>
			<EnumVal ord="3">Alarm</EnumVal>
		</EnumType>
		<EnumType id="CtlModelKind">
			<EnumVal ord="0">status-only</EnumVal>
			<EnumVal ord="1">direct-with-normal-security</EnumVal>
			<EnumVal ord="2">sbo-with-normal-security</EnumVal>
			<EnumVal ord="3">direct-with-enhanced-security</EnumVal>
			<EnumVal ord="4">sbo-with-enhanced-security</EnumVal>
		</EnumType>
		<EnumType id="BehaviourModeKind">
			<EnumVal ord="1">on</EnumVal>
			<EnumVal ord="2">blocked</EnumVal>
			<EnumVal ord="3">test</EnumVal>
			<EnumVal ord="4">test/blocked</EnumVal>
			<EnumVal ord="5">off</EnumVal>
		</EnumType>
		<EnumType id="OriginatorCategoryKind">
			<EnumVal ord="0">not-supported</EnumVal>
			<EnumVal ord="1">bay-control</EnumVal>
			<EnumVal ord="2">station-control</EnumVal>
			<EnumVal ord="3">remote-control</EnumVal>
			<EnumVal ord="4">automatic-bay</EnumVal>
			<EnumVal ord="5">automatic-station</EnumVal>
			<EnumVal ord="6">automatic-remote</EnumVal>
			<EnumVal ord="7">maintenance</EnumVal>
			<EnumVal ord="8">process</EnumVal>
		</EnumType>
	</DataTypeTemplates>
</SCL>`;

export const networkDataTestDocWithoutAddresses = `<?xml version="1.0" encoding="UTF-8"?>
<SCL xmlns="http://www.iec.ch/61850/2003/SCL" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" version="2007" revision="B" release="4">
	<Header id="Test"/>
	<Communication>
		<SubNetwork name="ProcessBus" desc="" type="8-MMS">
			<ConnectedAP iedName="SMV_Subscriber" apName="AP1"/>
			<ConnectedAP iedName="SMV_Publisher" apName="AP1">
			</ConnectedAP>
			<ConnectedAP iedName="GOOSE_Publisher" apName="PP1">
			</ConnectedAP>
			<ConnectedAP iedName="SMV_Publisher" apName="PP1">
			</ConnectedAP>
		</SubNetwork>
		<SubNetwork name="StationBus" desc="" type="8-MMS">
			<BitRate unit="b/s" multiplier="M">100</BitRate>
			<ConnectedAP iedName="GOOSE_Publisher" apName="AP1">    
			</ConnectedAP>
		</SubNetwork>
	</Communication>
	<IED name="SMV_Publisher" manufacturer="Dummy">
		<AccessPoint name="AP1">
			<Server>
				<Authentication/>
				<LDevice inst="CurrentTransformer">
					<LN0 lnClass="LLN0" inst="" lnType="Dummy.LLN0">
						<DataSet name="fullSmvsDataSet">
							<FCDA ldInst="CurrentTransformer" prefix="L3" lnClass="TCTR" lnInst="3" doName="AmpSv" daName="instMag.i" fc="MX"/>
							<FCDA ldInst="CurrentTransformer" prefix="L3" lnClass="TCTR" lnInst="3" doName="AmpSv" daName="q" fc="MX"/>
							<FCDA ldInst="CurrentTransformer" prefix="L2" lnClass="TCTR" lnInst="2" doName="AmpSv" daName="instMag.i" fc="MX"/>
							<FCDA ldInst="CurrentTransformer" prefix="L2" lnClass="TCTR" lnInst="2" doName="AmpSv" daName="q" fc="MX"/>
							<FCDA ldInst="CurrentTransformer" prefix="L1" lnClass="TCTR" lnInst="1" doName="AmpSv" daName="instMag.i" fc="MX"/>
							<FCDA ldInst="CurrentTransformer" prefix="L1" lnClass="TCTR" lnInst="1" doName="AmpSv" daName="q" fc="MX"/>
							<FCDA ldInst="VoltageTransformer" prefix="L3" lnClass="TVTR" lnInst="3" doName="VolSv" daName="instMag.i" fc="MX"/>
							<FCDA ldInst="VoltageTransformer" prefix="L3" lnClass="TVTR" lnInst="3" doName="VolSv" daName="q" fc="MX"/>
							<FCDA ldInst="VoltageTransformer" prefix="L2" lnClass="TVTR" lnInst="2" doName="VolSv" daName="instMag.i" fc="MX"/>
							<FCDA ldInst="VoltageTransformer" prefix="L2" lnClass="TVTR" lnInst="2" doName="VolSv" daName="q" fc="MX"/>
							<FCDA ldInst="VoltageTransformer" prefix="L1" lnClass="TVTR" lnInst="1" doName="VolSv" daName="instMag.i" fc="MX"/>
							<FCDA ldInst="VoltageTransformer" prefix="L1" lnClass="TVTR" lnInst="1" doName="VolSv" daName="q" fc="MX"/>
						</DataSet>
						<DataSet name="voltageOnlysDataSet">
							<FCDA ldInst="VoltageTransformer" prefix="L1" lnClass="TVTR" lnInst="1" doName="VolSv" daName="instMag.i" fc="MX"/>
							<FCDA ldInst="VoltageTransformer" prefix="L1" lnClass="TVTR" lnInst="1" doName="VolSv" daName="q" fc="MX"/>
							<FCDA ldInst="VoltageTransformer" prefix="L2" lnClass="TVTR" lnInst="2" doName="VolSv" daName="instMag.i" fc="MX"/>
							<FCDA ldInst="VoltageTransformer" prefix="L2" lnClass="TVTR" lnInst="2" doName="VolSv" daName="q" fc="MX"/>
							<FCDA ldInst="VoltageTransformer" prefix="L3" lnClass="TVTR" lnInst="3" doName="VolSv" daName="instMag.i" fc="MX"/>
							<FCDA ldInst="VoltageTransformer" prefix="L3" lnClass="TVTR" lnInst="3" doName="VolSv" daName="q" fc="MX"/>
						</DataSet>
						<DataSet name="currrentOnlysDataSet">
							<FCDA ldInst="CurrentTransformer" prefix="L1" lnClass="TCTR" lnInst="1" doName="AmpSv" daName="instMag.i" fc="MX"/>
							<FCDA ldInst="CurrentTransformer" prefix="L1" lnClass="TCTR" lnInst="1" doName="AmpSv" daName="q" fc="MX"/>
							<FCDA ldInst="CurrentTransformer" prefix="L2" lnClass="TCTR" lnInst="2" doName="AmpSv" daName="instMag.i" fc="MX"/>
							<FCDA ldInst="CurrentTransformer" prefix="L2" lnClass="TCTR" lnInst="2" doName="AmpSv" daName="q" fc="MX"/>
							<FCDA ldInst="CurrentTransformer" prefix="L3" lnClass="TCTR" lnInst="3" doName="AmpSv" daName="instMag.i" fc="MX"/>
							<FCDA ldInst="CurrentTransformer" prefix="L3" lnClass="TCTR" lnInst="3" doName="AmpSv" daName="q" fc="MX"/>
						</DataSet>
						<SampledValueControl name="fullSmv" multicast="true" smvID="smv3" smpMod="SmpPerPeriod" smpRate="80" nofASDU="1" confRev="1" datSet="fullSmvsDataSet">
							<SmvOpts sampleRate="true" dataSet="true" synchSourceId="true"/>
						</SampledValueControl>
						<SampledValueControl name="voltageOnly" multicast="true" smvID="smv2" smpMod="SmpPerPeriod" smpRate="80" nofASDU="1" confRev="1" datSet="voltageOnlysDataSet">
							<SmvOpts sampleRate="true" dataSet="true" synchSourceId="true"/>
						</SampledValueControl>
						<SampledValueControl name="currrentOnly" multicast="true" smvID="firstSMV" smpMod="SmpPerPeriod" smpRate="80" nofASDU="1" confRev="1" datSet="currrentOnlysDataSet">
							<SmvOpts sampleRate="true" dataSet="true" synchSourceId="true"/>
						</SampledValueControl>
						<SampledValueControl name="currrentOnlyDifferentAp" multicast="true" smvID="firstSMV" smpMod="SmpPerPeriod" smpRate="80" nofASDU="1" confRev="1" datSet="currrentOnlysDataSet">
							<SmvOpts sampleRate="true" dataSet="true" synchSourceId="true"/>
						</SampledValueControl>
					</LN0>
					<LN prefix="L3" lnClass="TCTR" inst="1" lnType="Dummy.TCTR"/>
					<LN prefix="L2" lnClass="TCTR" inst="1" lnType="Dummy.TCTR"/>
					<LN prefix="RES" lnClass="TCTR" inst="1" lnType="Dummy.TCTR"/>
					<LN prefix="L1" lnClass="TCTR" inst="1" lnType="Dummy.TCTR"/>
				</LDevice>
				<LDevice inst="VoltageTransformer">
					<LN0 lnClass="LLN0" inst="" lnType="Dummy.LLN0"/>
					<LN prefix="L3" lnClass="TVTR" inst="1" lnType="Dummy.TVTR"/>
					<LN prefix="L2" lnClass="TVTR" inst="1" lnType="Dummy.TVTR"/>
					<LN prefix="RES" lnClass="TVTR" inst="1" lnType="Dummy.TVTR"/>
					<LN prefix="L1" lnClass="TVTR" inst="1" lnType="Dummy.TVTR"/>
				</LDevice>
			</Server>
		</AccessPoint>
		<AccessPoint desc="Process Bus" name="PP1">
			<ServerAt apName="AP1"/>
			<Services>
				<ClientServices goose="true" sv="true"/>
			</Services>
		</AccessPoint>
	</IED>
	<IED name="GOOSE_Publisher" desc="GOOSE publisher" manufacturer="Dummy">
		<AccessPoint name="AP1">
			<Server>
				<Authentication/>
				<LDevice inst="QB2_Disconnector" desc="Animalia">
					<LN0 lnClass="LLN0" inst="" lnType="Dummy.LLN0">
						<DataSet name="GOOSE2sDataSet">
							<FCDA ldInst="QB2_Disconnector" prefix="" lnClass="CSWI" lnInst="1" doName="Pos" daName="stVal" fc="ST"/>
							<FCDA ldInst="QB2_Disconnector" prefix="" lnClass="CSWI" lnInst="1" doName="Pos" daName="q" fc="ST"/>
						</DataSet>
						<DataSet name="GOOSE1sDataSet">
							<FCDA ldInst="QB1_Disconnector" prefix="" lnClass="CSWI" lnInst="1" doName="Pos" daName="stVal" fc="ST"/>
							<FCDA ldInst="QB1_Disconnector" prefix="" lnClass="CSWI" lnInst="1" doName="Pos" daName="q" fc="ST"/>
						</DataSet>
						<GSEControl name="GOOSE3" type="GOOSE" appID="GOOSE3" confRev="1" datSet="GOOSE1sDataSet"/>
						<GSEControl name="GOOSE2" type="GOOSE" appID="GOOSE2" confRev="1" datSet="GOOSE2sDataSet"/>
						<GSEControl name="GOOSE1" type="GOOSE" appID="GOOSE1" confRev="1" datSet="GOOSE1sDataSet"/>
					</LN0>
					<LN prefix="" lnClass="CILO" inst="1" lnType="Dummy.CILO" desc="Chordata"/>
					<LN lnClass="CSWI" inst="1" lnType="Dummy.CSWI" desc="Arthropoda"/>
					<LN prefix="" lnClass="XSWI" inst="1" lnType="Dummy.XSWI" desc="Nematoda"/>
				</LDevice>
				<LDevice inst="QB1_Disconnector">
					<LN0 lnClass="LLN0" inst="" lnType="Dummy.LLN0"/>
					<LN prefix="" lnClass="CILO" inst="1" lnType="Dummy.CILO"/>
					<LN prefix="" lnClass="CSWI" inst="1" lnType="Dummy.CSWI"/>
					<LN prefix="" lnClass="XSWI" inst="1" lnType="Dummy.XSWI"/>
				</LDevice>
			</Server>
		</AccessPoint>
		<AccessPoint desc="Process Bus" name="PP1">
			<ServerAt apName="AP1"/>
			<Services>
				<ClientServices goose="true" sv="true"/>
			</Services>
		</AccessPoint>
	</IED>
	<IED name="GOOSE_Publisher2" desc="GOOSE publisher" manufacturer="Dummy">
		<AccessPoint name="AP1">
			<Server>
				<Authentication/>
				<LDevice inst="QB2_Disconnector" desc="Animalia">
					<LN0 lnClass="LLN0" inst="" lnType="Dummy.LLN0">
						<DataSet name="GOOSE2sDataSet">
							<FCDA ldInst="QB2_Disconnector" prefix="" lnClass="CSWI" lnInst="1" doName="Pos" daName="stVal" fc="ST"/>
							<FCDA ldInst="QB2_Disconnector" prefix="" lnClass="CSWI" lnInst="1" doName="Pos" daName="q" fc="ST"/>
						</DataSet>
						<DataSet name="GOOSE1sDataSet">
							<FCDA ldInst="QB1_Disconnector" prefix="" lnClass="CSWI" lnInst="1" doName="Pos" daName="stVal" fc="ST"/>
							<FCDA ldInst="QB1_Disconnector" prefix="" lnClass="CSWI" lnInst="1" doName="Pos" daName="q" fc="ST"/>
						</DataSet>
						<GSEControl name="GOOSE3" type="GOOSE" appID="GOOSE3" confRev="1" datSet="GOOSE1sDataSet"/>
						<GSEControl name="GOOSE2" type="GOOSE" appID="GOOSE2" confRev="1" datSet="GOOSE2sDataSet"/>
						<GSEControl name="GOOSE1" type="GOOSE" appID="GOOSE1" confRev="1" datSet="GOOSE1sDataSet"/>
					</LN0>
					<LN prefix="" lnClass="CILO" inst="1" lnType="Dummy.CILO" desc="Chordata"/>
					<LN lnClass="CSWI" inst="1" lnType="Dummy.CSWI" desc="Arthropoda"/>
					<LN prefix="" lnClass="XSWI" inst="1" lnType="Dummy.XSWI" desc="Nematoda"/>
				</LDevice>
				<LDevice inst="QB1_Disconnector">
					<LN0 lnClass="LLN0" inst="" lnType="Dummy.LLN0"/>
					<LN prefix="" lnClass="CILO" inst="1" lnType="Dummy.CILO"/>
					<LN prefix="" lnClass="CSWI" inst="1" lnType="Dummy.CSWI"/>
					<LN prefix="" lnClass="XSWI" inst="1" lnType="Dummy.XSWI"/>
				</LDevice>
			</Server>
		</AccessPoint>
	</IED>
	<IED name="GOOSE_Subscriber" manufacturer="Dummy">
		<AccessPoint name="AP1">
			<Server>
				<Authentication/>
				<LDevice inst="Earth_Switch">
					<LN0 lnClass="LLN0" inst="" lnType="Dummy.LLN0">
						<Inputs>
							<ExtRef iedName="GOOSE_Publisher" serviceType="GOOSE" ldInst="QB2_Disconnector" lnClass="CSWI" lnInst="1" prefix="" doName="Pos" daName="stVal" srcLDInst="QB2_Disconnector" srcPrefix="" srcLNClass="LLN0" srcCBName="GOOSE2"/>
							<ExtRef iedName="GOOSE_Publisher2" serviceType="GOOSE" ldInst="QB2_Disconnector" lnClass="CSWI" lnInst="1" prefix="" doName="Pos" daName="q" srcLDInst="QB2_Disconnector" srcPrefix="" srcLNClass="LLN0" srcCBName="GOOSE2"/>
						</Inputs>
					</LN0>
					<LN prefix="" lnClass="CILO" inst="1" lnType="Dummy.CILO">
						<Inputs>
							<ExtRef iedName="SomethingNotPresent" intAddr="Pos;CSWI1/Pos/stVal" desc="Missing IED" serviceType="GOOSE" ldInst="QB2_Disconnector" lnClass="CSWI" lnInst="1" prefix="" doName="Pos" daName="stVal" srcLDInst="QB2_Disconnector" srcPrefix="" srcLNClass="LLN0" srcCBName="GOOSE2"/>
							<ExtRef iedName="GOOSE_Publisher" intAddr="Pos;CSWI1/Pos/q" desc="Missing attributes" serviceType="GOOSE" ldInst="QB2_Disconnector" lnClass="CSWI" lnInst="1" prefix="" daName="q" srcPrefix="" srcLNClass="LLN0" srcCBName="GOOSE2"/>
						</Inputs>
					</LN>
					<LN prefix="" lnClass="CSWI" inst="1" lnType="Dummy.CSWI">
						<Inputs>
							<ExtRef iedName="GOOSE_Publisher" serviceType="GOOSE" ldInst="QB2_Disconnector" lnClass="CSWI" lnInst="1" prefix="" doName="Pos" daName="stVal" srcLDInst="QB2_Disconnector" srcPrefix="" srcLNClass="LLN0" srcCBName="GOOSE2" intAddr="Pos;CSWI1/Pos/stVal" desc="Interlocking.Input2"/>
							<ExtRef iedName="GOOSE_Publisher" serviceType="GOOSE" ldInst="QB2_Disconnector" lnClass="CSWI" lnInst="1" prefix="" doName="Pos" daName="q" srcLDInst="QB2_Disconnector" srcPrefix="" srcLNClass="LLN0" srcCBName="GOOSE2DoesNotExist" intAddr="Pos;CSWI1/Pos/q" desc="Interlocking.Input2"/>
							<ExtRef intAddr="someRestrictedExtRef" desc="Restricted To Pos" pLN="CSWI" pDO="Pos" pDA="stVal" pServT="GOOSE"/>
						</Inputs>
					</LN>
					<LN prefix="" lnClass="XSWI" inst="1" lnType="Dummy.XSWI"/>
				</LDevice>
			</Server>
		</AccessPoint>
		<AccessPoint desc="Process Bus" name="PP1">
			<ServerAt apName="AP1"/>
			<Services>
				<ClientServices goose="true" sv="true"/>
			</Services>
		</AccessPoint>
	</IED>
	<IED xmlns="http://www.iec.ch/61850/2003/SCL" name="SMV_Subscriber" manufacturer="Dummy">
		<Services>
			<SupSubscription maxSv="4" maxGo="0"/>
		</Services>
		<AccessPoint name="AP1">
			<Server>
				<Authentication/>
				<LDevice inst="Overvoltage">
					<LN0 lnClass="LLN0" inst="" lnType="Dummy.LLN0"/>
					<LN prefix="" lnClass="PTRC" inst="1" lnType="Summy.PTRC">
						<Inputs>
							<ExtRef intAddr="AmpSv;TCTR1/AmpSv/instMag.i" desc="MeasPoint.CT1"/>
							<ExtRef intAddr="AmpSv;TCTR1/AmpSv/q" desc="MeasPoint.CT1"/>
							<ExtRef intAddr="AmpSv;TCTR2/AmpSv/instMag.i" desc="MeasPoint.CT2" iedName="SMV_Publisher" ldInst="CurrentTransformer" prefix="L3" lnClass="TCTR" lnInst="3" doName="AmpSv" daName="instMag.i" srcLDInst="CurrentTransformer" srcPrefix="NoMatch" srcLNClass="LLN0" srcCBName="fullSmv" serviceType="SMV"/>
							<ExtRef intAddr="AmpSv;TCTR2/AmpSv/q" desc="MeasPoint.CT1"/>
							<ExtRef intAddr="AmpSv;TCTR3/AmpSv/instMag.i" desc="MeasPoint.CT3" iedName="SMV_Publisher" ldInst="CurrentTransformer" prefix="L3" lnClass="TCTR" lnInst="3" doName="AmpSv" daName="instMag.i" srcLDInst="CurrentTransformer" srcPrefix="" srcLNClass="LLN0" srcCBName="fullSmv" serviceType="SMV"/>
							<ExtRef intAddr="AmpSv;TCTR3/AmpSv/q" desc="MeasPoint.CT1" serviceType="SMV" iedName="SMV_Publisher" ldInst="CurrentTransformer" prefix="L3" lnClass="TCTR" lnInst="3" doName="AmpSv" daName="q" srcLDInst="CurrentTransformer" srcPrefix="" srcLNClass="LLN0" srcCBName="fullSmv"/>
							<ExtRef intAddr="sillyLikeA" serviceType="GOOSE"/>
						</Inputs>
					</LN>
				</LDevice>
				<LDevice inst="Overcurrent">
					<LN0 lnClass="LLN0" inst="" lnType="Dummy.LLN0"/>
					<LN prefix="" lnClass="PTRC" inst="1" lnType="Summy.PTRC">
						<Inputs>
							<ExtRef intAddr="VolSv;TVTR1/VolSv/instMag.i" desc="MeasPoint.VT1" serviceType="SMV"/>
							<ExtRef intAddr="VolSv;TVTR1/VolSv/q" desc="MeasPoint.VT1"/>
							<ExtRef intAddr="VolSv;TVTR2/VolSv/instMag.i" desc="MeasPoint.VT2"/>
							<ExtRef intAddr="VolSv;TVTR2/VolSv/q" desc="MeasPoint.VT1"/>
							<ExtRef intAddr="VolSv;TVTR3/VolSv/instMag.i" desc="MeasPoint.VT3"/>
							<ExtRef intAddr="VolSv;TVTR3/VolSv/q" desc="MeasPoint.VT1"/>
							<ExtRef intAddr="someRestrictedExtRef" desc="Restricted To AmpSV" pLN="TCTR" pDO="AmpSV" pDA="instMag.i"/>
						</Inputs>
					</LN>
				</LDevice>
				<LDevice inst="SV_supervision">
					<LN0 lnClass="LLN0" inst="" lnType="Dummy.LLN0"/>
					<LN lnClass="LSVS" inst="1" lnType="Dummy.LSVS">
						<DOI name="SvCBRef">
							<DAI name="setSrcRef">
								<Val>SMV_Publisher2CurrentTransformer/LLN0.fullSmv</Val>
							</DAI>
						</DOI>
					</LN>
					<LN lnClass="LSVS" inst="2" lnType="Dummy.LSVS">
						<Private type="OpenSCD.create"/>
						<DOI name="SvCBRef">
							<DAI name="setSrcRef">
								<Val>SMV_Publisher2CurrentTransformer/LLN0.voltageOnly</Val>
							</DAI>
						</DOI>
					</LN>
					<LN lnClass="LSVS" lnType="Dummy.LSVS" inst="3">
						<Private type="OpenSCD.create"/>
						<DOI name="SvCBRef">
							<DAI name="setSrcRef">
								<Val>SMV_PublisherCurrentTransformer/LLN0.fullSmv</Val>
							</DAI>
						</DOI>
					</LN>
				</LDevice>
			</Server>
		</AccessPoint>
		<AccessPoint desc="Process Bus" name="PP1">
			<ServerAt apName="AP1"/>
			<Services>
				<ClientServices goose="true" sv="true"/>
			</Services>
		</AccessPoint>
	</IED>
	<DataTypeTemplates>
		<LNodeType lnClass="PTRC" id="Summy.PTRC" desc="Trip conditioning: General trip signal">
			<DO name="Mod" type="OpenSCD_ENC_Mod"/>
			<DO name="Beh" type="OpenSCD_ENS_Beh"/>
			<DO name="Health" type="OpenSCD_ENS_Health"/>
			<DO name="NamPlt" type="OpenSCD_LPL_noLD"/>
			<DO name="Tr" type="OpenSCD_ACT_general"/>
			<DO name="Op" transient="true" type="OpenSCD_ACT_general"/>
			<DO name="Str" type="OpenSCD_ACD_general"/>
		</LNodeType>
		<LNodeType lnClass="LSVS" id="Dummy.LSVS">
			<DO name="SvCBRef" type="Dummy.ORG"/>
			<DO name="St" type="OpenSCD_SPS_simple"/>
			<DO name="Mod" type="OpenSCD_ENC_Mod"/>
			<DO name="Health" type="OpenSCD_ENS_Health"/>
			<DO name="Beh" type="OpenSCD_ENS_Beh"/>
			<DO name="NamPlt" type="OpenSCD_LPL_noLD"/>
		</LNodeType>
		<LNodeType lnClass="TCTR" id="Dummy.TCTR" desc="Current transformer">
			<DO name="Rat" type="Dummy.ASG"/>
			<DO name="ARtgSec" type="Dummy.ING"/>
			<DO name="ARtgNom" type="OpenSCD_ASG_ATrg_TCTR"/>
			<DO name="Mod" type="OpenSCD_ENC_Mod"/>
			<DO name="Beh" type="OpenSCD_ENS_Beh"/>
			<DO name="Health" type="OpenSCD_ENS_Health"/>
			<DO name="NamPlt" type="OpenSCD_LPL_noLD"/>
			<DO name="AmpSv" type="OpenSCD_SAV_AmpSv_TCTR"/>
			<DO name="ARtg" type="OpenSCD_ASG_ATrg_TCTR"/>
			<DO name="HzRtg" type="OpenSCD_ASG_HzRtg_TCTR"/>
		</LNodeType>
		<LNodeType lnClass="TVTR" id="Dummy.TVTR" desc="Voltage transformer">
			<DO name="Rat" type="Dummy.ASG"/>
			<DO name="VRtgSec" type="Dummy.ING"/>
			<DO name="Mod" type="OpenSCD_ENC_Mod"/>
			<DO name="Beh" type="OpenSCD_ENS_Beh"/>
			<DO name="Health" type="OpenSCD_ENS_Health"/>
			<DO name="NamPlt" type="OpenSCD_LPL_noLD"/>
			<DO name="VolSv" type="OpenSCD_SAV_VolSv_TVTR"/>
			<DO name="VRtg" type="OpenSCD_ASG_VRtg_TVTR"/>
			<DO name="HzRtg" type="OpenSCD_ASG_HzRtg_TCTR"/>
		</LNodeType>
		<LNodeType lnClass="LGOS" id="Dummy.LGOS">
			<DO name="GoCBRef" type="Dummy.ORG"/>
			<DO name="St" type="OpenSCD_SPS_simple"/>
			<DO name="Mod" type="OpenSCD_ENC_Mod"/>
			<DO name="Health" type="OpenSCD_ENS_Health"/>
			<DO name="Beh" type="OpenSCD_ENS_Beh"/>
			<DO name="NamPlt" type="OpenSCD_LPL_noLD"/>
		</LNodeType>
		<LNodeType lnClass="LGOS" id="Dummy.LGOS1">
			<DO name="GoCBRef" type="Dummy.ORG1"/>
			<DO name="LikeGoCBRef" type="Dummy.ORG1"/>
			<DO name="St" type="OpenSCD_SPS_simple"/>
			<DO name="Mod" type="OpenSCD_ENC_Mod"/>
			<DO name="Health" type="OpenSCD_ENS_Health"/>
			<DO name="Beh" type="OpenSCD_ENS_Beh"/>
			<DO name="NamPlt" type="OpenSCD_LPL_noLD"/>
		</LNodeType>
		<LNodeType lnClass="LGOS" id="Dummy.LGOS2">
			<DO name="GoCBRef" type="Dummy.ORG2"/>
			<DO name="St" type="OpenSCD_SPS_simple"/>
			<DO name="Mod" type="OpenSCD_ENC_Mod"/>
			<DO name="Health" type="OpenSCD_ENS_Health"/>
			<DO name="Beh" type="OpenSCD_ENS_Beh"/>
			<DO name="NamPlt" type="OpenSCD_LPL_noLD"/>
		</LNodeType>
		<LNodeType lnClass="XSWI" id="Dummy.XSWI" desc="Switch: one phase represenation">
			<DO name="Mod" type="OpenSCD_ENC_Mod"/>
			<DO name="Beh" type="OpenSCD_ENS_Beh"/>
			<DO name="Health" type="OpenSCD_ENS_Health"/>
			<DO name="NamPlt" type="OpenSCD_LPL_noLD"/>
			<DO name="LocKey" type="OpenSCD_SPS_simple"/>
			<DO name="Loc" type="OpenSCD_SPS_simple"/>
			<DO name="OpCnt" type="OpenSCD_INS_simple"/>
			<DO name="Pos" type="OpenSCD_DPC_statusonly"/>
			<DO name="BlkOpn" type="OpenSCD_SPC_statusonly"/>
			<DO name="BlkCls" type="OpenSCD_SPC_statusonly"/>
			<DO name="SwTyp" type="OpenSCD_ENS_SwTyp"/>
		</LNodeType>
		<LNodeType lnClass="CSWI" id="Dummy.CSWI" desc="Switch control: no process bus(PB)">
			<DO name="Mod" type="OpenSCD_ENC_Mod"/>
			<DO name="Beh" type="OpenSCD_ENS_Beh"/>
			<DO name="Health" type="OpenSCD_ENS_Health"/>
			<DO name="NamPlt" type="OpenSCD_LPL_noLD"/>
			<DO name="LocKey" type="OpenSCD_SPS_simple"/>
			<DO name="Loc" type="OpenSCD_SPS_simple"/>
			<DO name="Pos" type="OpenSCD_DPC"/>
		</LNodeType>
		<LNodeType lnClass="CILO" id="Dummy.CILO" desc="Interlocking">
			<DO name="Mod" type="OpenSCD_ENC_Mod"/>
			<DO name="Beh" type="OpenSCD_ENS_Beh"/>
			<DO name="Health" type="OpenSCD_ENS_Health"/>
			<DO name="NamPlt" type="OpenSCD_LPL_noLD"/>
			<DO name="EnaOpn" type="OpenSCD_SPS_simple"/>
			<DO name="EnaCls" type="OpenSCD_SPS_simple"/>
		</LNodeType>
		<LNodeType lnClass="LLN0" id="Dummy.LLN0" desc="Logical device LN: parent">
			<DO name="Mod" type="OpenSCD_ENC_Mod"/>
			<DO name="Beh" type="OpenSCD_ENS_Beh"/>
			<DO name="Health" type="OpenSCD_ENS_Health"/>
			<DO name="NamPlt" type="OpenSCD_LPL_LD"/>
			<DO name="LocKey" type="OpenSCD_SPS_simple"/>
			<DO name="Loc" type="OpenSCD_SPS_simple"/>
		</LNodeType>
		<DOType cdc="ACT" id="OpenSCD_ACT_general">
			<DA name="general" bType="BOOLEAN" dchg="true" fc="ST"/>
			<DA name="q" bType="Quality" qchg="true" fc="ST"/>
			<DA name="t" bType="Timestamp" fc="ST"/>
		</DOType>
		<DOType cdc="ACD" id="OpenSCD_ACD_general">
			<DA name="general" bType="BOOLEAN" dchg="true" fc="ST"/>
			<DA name="dirGeneral" bType="Enum" dchg="true" type="FaultDirectionKind" fc="ST"/>
			<DA name="q" bType="Quality" qchg="true" fc="ST"/>
			<DA name="t" bType="Timestamp" fc="ST"/>
		</DOType>
		<DOType cdc="SAV" id="OpenSCD_SAV_AmpSv_TCTR">
			<DA name="instMag" bType="Struct" type="OpenSCD_AnalogueValue_INT32" fc="MX"/>
			<DA name="q" bType="Quality" qchg="true" fc="MX"/>
			<DA name="t" bType="Timestamp" fc="MX"/>
			<DA name="units" bType="Struct" dchg="true" type="Unit" fc="CF"/>
			<DA name="sVC" bType="Struct" dchg="true" type="OpenSCD_ScaledValueConfig_AmpSv" fc="CF"/>
		</DOType>
		<DOType cdc="ASG" id="OpenSCD_ASG_ATrg_TCTR">
			<DA name="setMag" bType="Struct" type="Dummy.AnVal32" fc="SP"/>
			<DA name="units" bType="Struct" dchg="true" type="OpenSCD_Unit_A" fc="CF"/>
			<DA name="q" bType="Quality" qchg="true" fc="ST"/>
			<DA name="t" bType="Timestamp" fc="ST"/>
		</DOType>
		<DOType cdc="ASG" id="OpenSCD_ASG_HzRtg_TCTR">
			<DA name="setMag" bType="Struct" type="OpenSCD_AnalogueValue_INT32" fc="SP"/>
			<DA name="units" bType="Struct" dchg="true" type="OpenSCD_Unit_Hz" fc="CF"/>
			<DA name="sVC" bType="Struct" dchg="true" type="ScaledValueConfig" fc="CF"/>
			<DA name="q" bType="Quality" qchg="true" fc="ST"/>
			<DA name="t" bType="Timestamp" fc="ST"/>
		</DOType>
		<DOType cdc="SAV" id="OpenSCD_SAV_VolSv_TVTR">
			<DA name="instMag" bType="Struct" type="OpenSCD_AnalogueValue_INT32" fc="MX"/>
			<DA name="q" bType="Quality" qchg="true" fc="MX"/>
			<DA name="t" bType="Timestamp" fc="MX"/>
			<DA name="units" bType="Struct" dchg="true" type="Unit" fc="CF"/>
			<DA name="sVC" bType="Struct" dchg="true" type="OpenSCD_ScaledValueConfig_VolSv" fc="CF"/>
		</DOType>
		<DOType cdc="ASG" id="OpenSCD_ASG_VRtg_TVTR">
			<DA name="setMag" bType="Struct" type="Dummy.AnVal32" fc="SP"/>
			<DA name="units" bType="Struct" dchg="true" type="OpenSCD_Unit_V" fc="CF"/>
			<DA name="q" bType="Quality" qchg="true" fc="ST"/>
			<DA name="t" bType="Timestamp" fc="ST"/>
		</DOType>
		<DOType cdc="ING" id="Dummy.ING">
			<DA name="setVal" bType="INT32" dchg="true" fc="SP"/>
			<DA name="q" bType="Quality" qchg="true" fc="ST"/>
			<DA name="t" bType="Timestamp" fc="ST"/>
			<DA name="d" bType="VisString255" fc="DC"/>
		</DOType>
		<DOType id="Dummy.ASG" cdc="ASG">
			<DA name="setMag" bType="Struct" type="Dummy.AnVal32" fc="SP" dchg="true"/>
			<DA name="q" bType="Quality" fc="SP" qchg="true"/>
			<DA name="t" bType="Timestamp" fc="SP"/>
		</DOType>
		<DOType cdc="ORG" id="Dummy.ORG">
			<DA name="setSrcRef" bType="ObjRef" dchg="true" valKind="RO" valImport="true" fc="SP"/>
		</DOType>
		<DOType cdc="ORG" id="Dummy.ORG1">
			<DA name="setSrcRef" bType="ObjRef" dchg="true" valKind="Conf" valImport="true" fc="SP"/>
		</DOType>
		<DOType cdc="ORG" id="Dummy.ORG2">
			<DA name="setSrcRef" bType="ObjRef" dchg="true" fc="SP"/>
		</DOType>
		<DOType cdc="ENS" id="OpenSCD_ENS_SwTyp">
			<DA fc="ST" dchg="true" name="stVal" bType="Enum" type="SwitchFunctionKind"/>
			<DA fc="ST" qchg="true" name="q" bType="Quality"/>
			<DA fc="ST" name="t" bType="Timestamp"/>
		</DOType>
		<DOType cdc="SPC" id="OpenSCD_SPC_statusonly">
			<DA name="stVal" bType="BOOLEAN" dchg="true" fc="ST"/>
			<DA name="q" bType="Quality" qchg="true" fc="ST"/>
			<DA name="t" bType="Timestamp" fc="ST"/>
			<DA name="ctlModel" bType="Enum" dchg="true" type="OpenSCD_StatusOnly" fc="CF">
				<Val>status-only</Val>
			</DA>
		</DOType>
		<DOType cdc="DPC" id="OpenSCD_DPC_statusonly">
			<DA name="stVal" bType="Dbpos" dchg="true" fc="ST"/>
			<DA name="q" bType="Quality" qchg="true" fc="ST"/>
			<DA name="t" bType="Timestamp" fc="ST"/>
			<DA name="ctlModel" bType="Enum" fc="CF" type="OpenSCD_StatusOnly">
				<Val>status-only</Val>
			</DA>
		</DOType>
		<DOType cdc="INS" id="OpenSCD_INS_simple">
			<DA name="stVal" bType="INT32" dchg="true" fc="ST"/>
			<DA name="q" bType="Quality" qchg="true" fc="ST"/>
			<DA name="t" bType="Timestamp" fc="ST"/>
			<DA name="d" bType="VisString255" fc="DC"/>
		</DOType>
		<DOType cdc="DPC" id="OpenSCD_DPC">
			<DA name="origin" bType="Struct" dchg="true" fc="ST" type="OpenSCD_Originator"/>
			<DA name="stVal" bType="Dbpos" dchg="true" fc="ST"/>
			<DA name="q" bType="Quality" qchg="true" fc="ST"/>
			<DA name="t" bType="Timestamp" fc="ST"/>
			<DA name="ctlModel" bType="Enum" fc="CF" type="CtlModelKind">
				<Val>sbo-with-enhanced-security</Val>
			</DA>
			<DA name="sboTimeout" bType="INT32U" fc="CF">
				<Val>30000</Val>
			</DA>
			<DA name="operTimeout" bType="INT32U" fc="CF">
				<Val>600</Val>
			</DA>
			<DA name="pulseConfig" bType="Struct" fc="CO" type="OpenSCD_PulseConfig"/>
			<DA name="SBOw" bType="Struct" fc="CO" type="OpenSCD_OperSBOw_Dbpos"/>
			<DA name="Oper" bType="Struct" fc="CO" type="OpenSCD_OperSBOw_Dbpos"/>
			<DA name="Cancel" bType="Struct" fc="CO" type="OpenSCD_Cancel_Dbpos"/>
		</DOType>
		<DOType cdc="LPL" id="OpenSCD_LPL_noLD">
			<DA name="vendor" bType="VisString255" fc="DC"/>
			<DA name="swRev" bType="VisString255" fc="DC"/>
			<DA name="d" bType="VisString255" fc="DC"/>
			<DA name="configRev" bType="VisString255" fc="DC"/>
		</DOType>
		<DOType cdc="SPS" id="OpenSCD_SPS_simple">
			<DA name="stVal" bType="BOOLEAN" dchg="true" fc="ST"/>
			<DA name="q" bType="Quality" qchg="true" fc="ST"/>
			<DA name="t" bType="Timestamp" fc="ST"/>
			<DA name="d" bType="VisString255" fc="DC"/>
		</DOType>
		<DOType cdc="LPL" id="OpenSCD_LPL_LD">
			<DA name="vendor" bType="VisString255" fc="DC"/>
			<DA name="swRev" bType="VisString255" fc="DC"/>
			<DA name="d" bType="VisString255" fc="DC"/>
			<DA name="configRev" bType="VisString255" fc="DC"/>
			<DA name="ldNs" bType="VisString255" fc="EX">
				<Val>IEC 61850-7-4:2007B4</Val>
			</DA>
		</DOType>
		<DOType cdc="ENS" id="OpenSCD_ENS_Health">
			<DA name="stVal" bType="Enum" dchg="true" fc="ST" type="HealthKind"/>
			<DA name="q" bType="Quality" qchg="true" fc="ST"/>
			<DA name="t" bType="Timestamp" fc="ST"/>
		</DOType>
		<DOType cdc="ENS" id="OpenSCD_ENS_Beh">
			<DA name="stVal" bType="Enum" dchg="true" fc="ST" type="BehaviourModeKind"/>
			<DA name="q" bType="Quality" qchg="true" fc="ST"/>
			<DA name="t" bType="Timestamp" fc="ST"/>
		</DOType>
		<DOType cdc="ENC" id="OpenSCD_ENC_Mod">
			<DA name="origin" bType="Struct" dchg="true" fc="ST" type="OpenSCD_Originator"/>
			<DA name="stVal" bType="Enum" dchg="true" fc="ST" type="BehaviourModeKind"/>
			<DA name="q" bType="Quality" qchg="true" fc="ST"/>
			<DA name="t" bType="Timestamp" fc="ST"/>
			<DA name="ctlModel" bType="Enum" fc="CF" type="CtlModelKind">
				<Val>sbo-with-enhanced-security</Val>
			</DA>
			<DA name="sboTimeout" bType="INT32U" fc="CF">
				<Val>30000</Val>
			</DA>
			<DA name="operTimeout" bType="INT32U" fc="CF">
				<Val>600</Val>
			</DA>
			<DA name="SBOw" bType="Struct" fc="CO" type="OpenSCD_OperSBOw_BehaviourModeKind"/>
			<DA name="Oper" bType="Struct" fc="CO" type="OpenSCD_OperSBOw_BehaviourModeKind"/>
			<DA name="Cancel" bType="Struct" fc="CO" type="OpenSCD_Cancel_BehaviourModeKind"/>
		</DOType>
		<DAType id="OpenSCD_AnalogueValue_INT32">
			<BDA name="i" bType="INT32"/>
		</DAType>
		<DAType id="Unit">
			<BDA name="SIUnit" bType="Enum" type="SIUnitKind"/>
			<BDA name="multiplier" bType="Enum" type="MultiplierKind"/>
		</DAType>
		<DAType id="OpenSCD_ScaledValueConfig_AmpSv">
			<BDA name="scaleFactor" bType="FLOAT32">
				<Val>0.001</Val>
			</BDA>
			<BDA name="offset" bType="FLOAT32">
				<Val>0</Val>
			</BDA>
		</DAType>
		<DAType id="OpenSCD_Unit_A">
			<BDA name="SIUnit" bType="Enum" type="SIUnitKind">
				<Val>A</Val>
			</BDA>
		</DAType>
		<DAType id="ScaledValueConfig">
			<BDA name="scaleFactor" bType="FLOAT32"/>
			<BDA name="offset" bType="FLOAT32"/>
		</DAType>
		<DAType id="OpenSCD_Unit_Hz">
			<BDA name="SIUnit" bType="Enum" type="SIUnitKind">
				<Val>Hz</Val>
			</BDA>
		</DAType>
		<DAType id="OpenSCD_ScaledValueConfig_VolSv">
			<BDA name="scaleFactor" bType="FLOAT32">
				<Val>0.01</Val>
			</BDA>
			<BDA name="offset" bType="FLOAT32">
				<Val>0</Val>
			</BDA>
		</DAType>
		<DAType id="OpenSCD_Unit_V">
			<BDA name="SIUnit" bType="Enum" type="SIUnitKind">
				<Val>A</Val>
			</BDA>
		</DAType>
		<DAType id="Dummy.AnVal32">
			<BDA name="f" bType="FLOAT32"/>
		</DAType>
		<DAType id="OpenSCD_Cancel_Dbpos">
			<BDA name="ctlVal" bType="Dbpos"/>
			<BDA name="origin" bType="Struct" type="OpenSCD_Originator"/>
			<BDA name="ctlNum" bType="INT8U"/>
			<BDA name="T" bType="Timestamp"/>
			<BDA name="Test" bType="BOOLEAN"/>
			<ProtNs type="8-MMS">IEC 61850-8-1:2003</ProtNs>
		</DAType>
		<DAType id="OpenSCD_OperSBOw_Dbpos">
			<BDA name="ctlVal" bType="Dbpos"/>
			<BDA name="origin" bType="Struct" type="OpenSCD_Originator"/>
			<BDA name="ctlNum" bType="INT8U"/>
			<BDA name="T" bType="Timestamp"/>
			<BDA name="Test" bType="BOOLEAN"/>
			<BDA name="Check" bType="Check"/>
			<ProtNs type="8-MMS">IEC 61850-8-1:2003</ProtNs>
		</DAType>
		<DAType id="OpenSCD_PulseConfig">
			<BDA name="cmdQual" bType="Enum" type="OutputSignalKind"/>
			<BDA name="onDur" bType="INT32U"/>
			<BDA name="offDur" bType="INT32U"/>
			<BDA name="numPls" bType="INT32U"/>
		</DAType>
		<DAType id="OpenSCD_Cancel_BehaviourModeKind">
			<BDA name="ctlVal" bType="Enum" type="BehaviourModeKind"/>
			<BDA name="origin" bType="Struct" type="OpenSCD_Originator"/>
			<BDA name="ctlNum" bType="INT8U"/>
			<BDA name="T" bType="Timestamp"/>
			<BDA name="Test" bType="BOOLEAN"/>
			<ProtNs type="8-MMS">IEC 61850-8-1:2003</ProtNs>
		</DAType>
		<DAType id="OpenSCD_OperSBOw_BehaviourModeKind">
			<BDA name="ctlVal" bType="Enum" type="BehaviourModeKind"/>
			<BDA name="origin" bType="Struct" type="OpenSCD_Originator"/>
			<BDA name="ctlNum" bType="INT8U"/>
			<BDA name="T" bType="Timestamp"/>
			<BDA name="Test" bType="BOOLEAN"/>
			<BDA name="Check" bType="Check"/>
			<ProtNs type="8-MMS">IEC 61850-8-1:2003</ProtNs>
		</DAType>
		<DAType id="OpenSCD_Originator">
			<BDA name="orCat" bType="Enum" type="OriginatorCategoryKind"/>
			<BDA name="orIdent" bType="Octet64"/>
		</DAType>
		<EnumType id="FaultDirectionKind">
			<EnumVal ord="0">unknown</EnumVal>
			<EnumVal ord="1">forward</EnumVal>
			<EnumVal ord="2">backward</EnumVal>
			<EnumVal ord="3">both</EnumVal>
		</EnumType>
		<EnumType id="SIUnitKind">
			<EnumVal ord="1"/>
			<EnumVal ord="2">m</EnumVal>
			<EnumVal ord="3">kg</EnumVal>
			<EnumVal ord="4">s</EnumVal>
			<EnumVal ord="5">A</EnumVal>
			<EnumVal ord="6">K</EnumVal>
			<EnumVal ord="7">mol</EnumVal>
			<EnumVal ord="8">cd</EnumVal>
			<EnumVal ord="9">deg</EnumVal>
			<EnumVal ord="10">rad</EnumVal>
			<EnumVal ord="11">sr</EnumVal>
			<EnumVal ord="21">Gy</EnumVal>
			<EnumVal ord="22">Bq</EnumVal>
			<EnumVal ord="23">°C</EnumVal>
			<EnumVal ord="24">Sv</EnumVal>
			<EnumVal ord="25">F</EnumVal>
			<EnumVal ord="26">C</EnumVal>
			<EnumVal ord="27">S</EnumVal>
			<EnumVal ord="28">H</EnumVal>
			<EnumVal ord="29">V</EnumVal>
			<EnumVal ord="30">ohm</EnumVal>
			<EnumVal ord="31">J</EnumVal>
			<EnumVal ord="32">N</EnumVal>
			<EnumVal ord="33">Hz</EnumVal>
			<EnumVal ord="34">lx</EnumVal>
			<EnumVal ord="35">Lm</EnumVal>
			<EnumVal ord="36">Wb</EnumVal>
			<EnumVal ord="37">T</EnumVal>
			<EnumVal ord="38">W</EnumVal>
			<EnumVal ord="39">Pa</EnumVal>
			<EnumVal ord="41">m²</EnumVal>
			<EnumVal ord="42">m³</EnumVal>
			<EnumVal ord="43">m/s</EnumVal>
			<EnumVal ord="44">m/s²</EnumVal>
			<EnumVal ord="45">m³/s</EnumVal>
			<EnumVal ord="46">m/m³</EnumVal>
			<EnumVal ord="47">M</EnumVal>
			<EnumVal ord="48">kg/m³</EnumVal>
			<EnumVal ord="49">m²/s</EnumVal>
			<EnumVal ord="50">W/m K</EnumVal>
			<EnumVal ord="51">J/K</EnumVal>
			<EnumVal ord="52">ppm</EnumVal>
			<EnumVal ord="53">1/s</EnumVal>
			<EnumVal ord="54">rad/s</EnumVal>
			<EnumVal ord="55">W/m²</EnumVal>
			<EnumVal ord="56">J/m²</EnumVal>
			<EnumVal ord="57">S/m</EnumVal>
			<EnumVal ord="58">K/s</EnumVal>
			<EnumVal ord="59">Pa/s</EnumVal>
			<EnumVal ord="60">J/kg K</EnumVal>
			<EnumVal ord="61">VA</EnumVal>
			<EnumVal ord="62">Watts</EnumVal>
			<EnumVal ord="63">VAr</EnumVal>
			<EnumVal ord="64">phi</EnumVal>
			<EnumVal ord="65">cos(phi)</EnumVal>
			<EnumVal ord="66">Vs</EnumVal>
			<EnumVal ord="67">V²</EnumVal>
			<EnumVal ord="68">As</EnumVal>
			<EnumVal ord="69">A²</EnumVal>
			<EnumVal ord="70">A²t</EnumVal>
			<EnumVal ord="71">VAh</EnumVal>
			<EnumVal ord="72">Wh</EnumVal>
			<EnumVal ord="73">VArh</EnumVal>
			<EnumVal ord="74">V/Hz</EnumVal>
			<EnumVal ord="75">Hz/s</EnumVal>
			<EnumVal ord="76">char</EnumVal>
			<EnumVal ord="77">char/s</EnumVal>
			<EnumVal ord="78">kgm²</EnumVal>
			<EnumVal ord="79">dB</EnumVal>
			<EnumVal ord="80">J/Wh</EnumVal>
			<EnumVal ord="81">W/s</EnumVal>
			<EnumVal ord="82">l/s</EnumVal>
			<EnumVal ord="83">dBm</EnumVal>
			<EnumVal ord="84">h</EnumVal>
			<EnumVal ord="85">min</EnumVal>
			<EnumVal ord="86">Ohm/m</EnumVal>
			<EnumVal ord="87">percent/s</EnumVal>
		</EnumType>
		<EnumType id="MultiplierKind">
			<EnumVal ord="-24">y</EnumVal>
			<EnumVal ord="-21">z</EnumVal>
			<EnumVal ord="-18">a</EnumVal>
			<EnumVal ord="-15">f</EnumVal>
			<EnumVal ord="-12">p</EnumVal>
			<EnumVal ord="-9">n</EnumVal>
			<EnumVal ord="-6">µ</EnumVal>
			<EnumVal ord="-3">m</EnumVal>
			<EnumVal ord="-2">c</EnumVal>
			<EnumVal ord="-1">d</EnumVal>
			<EnumVal ord="0"/>
			<EnumVal ord="1">da</EnumVal>
			<EnumVal ord="2">h</EnumVal>
			<EnumVal ord="3">k</EnumVal>
			<EnumVal ord="6">M</EnumVal>
			<EnumVal ord="9">G</EnumVal>
			<EnumVal ord="12">T</EnumVal>
			<EnumVal ord="15">P</EnumVal>
			<EnumVal ord="18">E</EnumVal>
			<EnumVal ord="21">Z</EnumVal>
			<EnumVal ord="24">Y</EnumVal>
		</EnumType>
		<EnumType id="SwitchFunctionKind">
			<EnumVal ord="1">Load Break</EnumVal>
			<EnumVal ord="2">Disconnector</EnumVal>
			<EnumVal ord="3">Earthing Switch</EnumVal>
			<EnumVal ord="4">High Speed Earthing Switch</EnumVal>
		</EnumType>
		<EnumType id="OpenSCD_StatusOnly">
			<EnumVal ord="0">status-only</EnumVal>
		</EnumType>
		<EnumType id="OutputSignalKind">
			<EnumVal ord="0">pulse</EnumVal>
			<EnumVal ord="1">persistent</EnumVal>
			<EnumVal ord="2">persistent-feedback</EnumVal>
		</EnumType>
		<EnumType id="HealthKind">
			<EnumVal ord="1">Ok</EnumVal>
			<EnumVal ord="2">Warning</EnumVal>
			<EnumVal ord="3">Alarm</EnumVal>
		</EnumType>
		<EnumType id="CtlModelKind">
			<EnumVal ord="0">status-only</EnumVal>
			<EnumVal ord="1">direct-with-normal-security</EnumVal>
			<EnumVal ord="2">sbo-with-normal-security</EnumVal>
			<EnumVal ord="3">direct-with-enhanced-security</EnumVal>
			<EnumVal ord="4">sbo-with-enhanced-security</EnumVal>
		</EnumType>
		<EnumType id="BehaviourModeKind">
			<EnumVal ord="1">on</EnumVal>
			<EnumVal ord="2">blocked</EnumVal>
			<EnumVal ord="3">test</EnumVal>
			<EnumVal ord="4">test/blocked</EnumVal>
			<EnumVal ord="5">off</EnumVal>
		</EnumType>
		<EnumType id="OriginatorCategoryKind">
			<EnumVal ord="0">not-supported</EnumVal>
			<EnumVal ord="1">bay-control</EnumVal>
			<EnumVal ord="2">station-control</EnumVal>
			<EnumVal ord="3">remote-control</EnumVal>
			<EnumVal ord="4">automatic-bay</EnumVal>
			<EnumVal ord="5">automatic-station</EnumVal>
			<EnumVal ord="6">automatic-remote</EnumVal>
			<EnumVal ord="7">maintenance</EnumVal>
			<EnumVal ord="8">process</EnumVal>
		</EnumType>
	</DataTypeTemplates>
</SCL>`;

export const networkDataTestDocMissingGSEAddressInfo = `<?xml version="1.0" encoding="UTF-8"?>
<SCL xmlns="http://www.iec.ch/61850/2003/SCL" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" version="2007" revision="B" release="4">
	<Header id="Test"/>
	<Communication>
		<SubNetwork name="ProcessBus" desc="" type="8-MMS">
			<ConnectedAP iedName="SMV_Subscriber" apName="AP1"/>
			<ConnectedAP iedName="SMV_Publisher" apName="AP1">
				<SMV ldInst="CurrentTransformer" cbName="fullSmv">
					<Address>
					<P type="MAC-Address" xsi:type="tP_MAC-Address">01-0C-CD-04-00-03</P>
						<P type="VLAN-ID" xsi:type="tP_VLAN-ID">3EE</P>
						<P type="VLAN-PRIORITY" xsi:type="tP_VLAN-PRIORITY">4</P>
						<P type="APPID" xsi:type="tP_APPID">0003</P>
					</Address>
				</SMV>
				<SMV ldInst="CurrentTransformer" cbName="voltageOnly">
					<Address>
						<P type="MAC-Address" xsi:type="tP_MAC-Address">01-0C-CD-04-00-01</P>
						<P type="APPID" xsi:type="tP_APPID">0002</P>
					</Address>
				</SMV>
			</ConnectedAP>
			<ConnectedAP iedName="GOOSE_Publisher" apName="PP1">
				<GSE ldInst="QB2_Disconnector" cbName="GOOSE1">
					<Address>
						<P type="MAC-Address" xsi:type="tP_MAC-Address">01-0C-CD-01-00-01</P>
						<P type="APPID" xsi:type="tP_APPID">0002</P>
					</Address>
					<MinTime unit="s" multiplier="m">10</MinTime>
					<MaxTime unit="s" multiplier="m">1000</MaxTime>
				</GSE>
			</ConnectedAP>
			<ConnectedAP iedName="SMV_Publisher" apName="PP1">
				<SMV ldInst="CurrentTransformer" cbName="currrentOnlyDifferentAp">
					<Address>
						<P type="MAC-Address" xsi:type="tP_MAC-Address">01-0C-CD-04-00-02</P>
						<P type="VLAN-ID" xsi:type="tP_VLAN-ID">3EE</P>
						<P type="VLAN-PRIORITY" xsi:type="tP_VLAN-PRIORITY">4</P>
						<P type="APPID" xsi:type="tP_APPID">0003</P>
					</Address>
				</SMV>
			</ConnectedAP>
		</SubNetwork>
		<SubNetwork name="StationBus" desc="" type="8-MMS">
			<BitRate unit="b/s" multiplier="M">100</BitRate>
			<ConnectedAP iedName="GOOSE_Publisher" apName="AP1">
				<GSE ldInst="QB2_Disconnector" cbName="GOOSE2">
					<Address>
						<P type="APPID" xsi:type="tP_APPID">0001</P>
					</Address>
					<MinTime unit="s" multiplier="m">10</MinTime>
					<MaxTime unit="s" multiplier="m">1000</MaxTime>
				</GSE>
			</ConnectedAP>
			<ConnectedAP iedName="GOOSE_Publisher2" apName="AP1">
				<GSE ldInst="QB2_Disconnector" cbName="GOOSE2">
					<Address>
						<P type="MAC-Address" xsi:type="tP_MAC-Address">01-0C-CD-01-00-01</P>
						<P type="APPID" xsi:type="tP_APPID">0002</P>
					</Address>
					<MinTime unit="s" multiplier="m">10</MinTime>
					<MaxTime unit="s" multiplier="m">1000</MaxTime>
				</GSE>
			</ConnectedAP>
		</SubNetwork>
	</Communication>
	<IED name="SMV_Publisher" manufacturer="Dummy">
		<AccessPoint name="AP1">
			<Server>
				<Authentication/>
				<LDevice inst="CurrentTransformer">
					<LN0 lnClass="LLN0" inst="" lnType="Dummy.LLN0">
						<DataSet name="fullSmvsDataSet">
							<FCDA ldInst="CurrentTransformer" prefix="L3" lnClass="TCTR" lnInst="3" doName="AmpSv" daName="instMag.i" fc="MX"/>
							<FCDA ldInst="CurrentTransformer" prefix="L3" lnClass="TCTR" lnInst="3" doName="AmpSv" daName="q" fc="MX"/>
							<FCDA ldInst="CurrentTransformer" prefix="L2" lnClass="TCTR" lnInst="2" doName="AmpSv" daName="instMag.i" fc="MX"/>
							<FCDA ldInst="CurrentTransformer" prefix="L2" lnClass="TCTR" lnInst="2" doName="AmpSv" daName="q" fc="MX"/>
							<FCDA ldInst="CurrentTransformer" prefix="L1" lnClass="TCTR" lnInst="1" doName="AmpSv" daName="instMag.i" fc="MX"/>
							<FCDA ldInst="CurrentTransformer" prefix="L1" lnClass="TCTR" lnInst="1" doName="AmpSv" daName="q" fc="MX"/>
							<FCDA ldInst="VoltageTransformer" prefix="L3" lnClass="TVTR" lnInst="3" doName="VolSv" daName="instMag.i" fc="MX"/>
							<FCDA ldInst="VoltageTransformer" prefix="L3" lnClass="TVTR" lnInst="3" doName="VolSv" daName="q" fc="MX"/>
							<FCDA ldInst="VoltageTransformer" prefix="L2" lnClass="TVTR" lnInst="2" doName="VolSv" daName="instMag.i" fc="MX"/>
							<FCDA ldInst="VoltageTransformer" prefix="L2" lnClass="TVTR" lnInst="2" doName="VolSv" daName="q" fc="MX"/>
							<FCDA ldInst="VoltageTransformer" prefix="L1" lnClass="TVTR" lnInst="1" doName="VolSv" daName="instMag.i" fc="MX"/>
							<FCDA ldInst="VoltageTransformer" prefix="L1" lnClass="TVTR" lnInst="1" doName="VolSv" daName="q" fc="MX"/>
						</DataSet>
						<DataSet name="voltageOnlysDataSet">
							<FCDA ldInst="VoltageTransformer" prefix="L1" lnClass="TVTR" lnInst="1" doName="VolSv" daName="instMag.i" fc="MX"/>
							<FCDA ldInst="VoltageTransformer" prefix="L1" lnClass="TVTR" lnInst="1" doName="VolSv" daName="q" fc="MX"/>
							<FCDA ldInst="VoltageTransformer" prefix="L2" lnClass="TVTR" lnInst="2" doName="VolSv" daName="instMag.i" fc="MX"/>
							<FCDA ldInst="VoltageTransformer" prefix="L2" lnClass="TVTR" lnInst="2" doName="VolSv" daName="q" fc="MX"/>
							<FCDA ldInst="VoltageTransformer" prefix="L3" lnClass="TVTR" lnInst="3" doName="VolSv" daName="instMag.i" fc="MX"/>
							<FCDA ldInst="VoltageTransformer" prefix="L3" lnClass="TVTR" lnInst="3" doName="VolSv" daName="q" fc="MX"/>
						</DataSet>
						<DataSet name="currrentOnlysDataSet">
							<FCDA ldInst="CurrentTransformer" prefix="L1" lnClass="TCTR" lnInst="1" doName="AmpSv" daName="instMag.i" fc="MX"/>
							<FCDA ldInst="CurrentTransformer" prefix="L1" lnClass="TCTR" lnInst="1" doName="AmpSv" daName="q" fc="MX"/>
							<FCDA ldInst="CurrentTransformer" prefix="L2" lnClass="TCTR" lnInst="2" doName="AmpSv" daName="instMag.i" fc="MX"/>
							<FCDA ldInst="CurrentTransformer" prefix="L2" lnClass="TCTR" lnInst="2" doName="AmpSv" daName="q" fc="MX"/>
							<FCDA ldInst="CurrentTransformer" prefix="L3" lnClass="TCTR" lnInst="3" doName="AmpSv" daName="instMag.i" fc="MX"/>
							<FCDA ldInst="CurrentTransformer" prefix="L3" lnClass="TCTR" lnInst="3" doName="AmpSv" daName="q" fc="MX"/>
						</DataSet>
						<SampledValueControl name="fullSmv" multicast="true" smvID="smv3" smpMod="SmpPerPeriod" smpRate="80" nofASDU="1" confRev="1" datSet="fullSmvsDataSet">
							<SmvOpts sampleRate="true" dataSet="true" synchSourceId="true"/>
						</SampledValueControl>
						<SampledValueControl name="voltageOnly" multicast="true" smvID="smv2" smpMod="SmpPerPeriod" smpRate="80" nofASDU="1" confRev="1" datSet="voltageOnlysDataSet">
							<SmvOpts sampleRate="true" dataSet="true" synchSourceId="true"/>
						</SampledValueControl>
						<SampledValueControl name="currrentOnly" multicast="true" smvID="firstSMV" smpMod="SmpPerPeriod" smpRate="80" nofASDU="1" confRev="1" datSet="currrentOnlysDataSet">
							<SmvOpts sampleRate="true" dataSet="true" synchSourceId="true"/>
						</SampledValueControl>
						<SampledValueControl name="currrentOnlyDifferentAp" multicast="true" smvID="firstSMV" smpMod="SmpPerPeriod" smpRate="80" nofASDU="1" confRev="1" datSet="currrentOnlysDataSet">
							<SmvOpts sampleRate="true" dataSet="true" synchSourceId="true"/>
						</SampledValueControl>
					</LN0>
					<LN prefix="L3" lnClass="TCTR" inst="1" lnType="Dummy.TCTR"/>
					<LN prefix="L2" lnClass="TCTR" inst="1" lnType="Dummy.TCTR"/>
					<LN prefix="RES" lnClass="TCTR" inst="1" lnType="Dummy.TCTR"/>
					<LN prefix="L1" lnClass="TCTR" inst="1" lnType="Dummy.TCTR"/>
				</LDevice>
				<LDevice inst="VoltageTransformer">
					<LN0 lnClass="LLN0" inst="" lnType="Dummy.LLN0"/>
					<LN prefix="L3" lnClass="TVTR" inst="1" lnType="Dummy.TVTR"/>
					<LN prefix="L2" lnClass="TVTR" inst="1" lnType="Dummy.TVTR"/>
					<LN prefix="RES" lnClass="TVTR" inst="1" lnType="Dummy.TVTR"/>
					<LN prefix="L1" lnClass="TVTR" inst="1" lnType="Dummy.TVTR"/>
				</LDevice>
			</Server>
		</AccessPoint>
		<AccessPoint desc="Process Bus" name="PP1">
			<ServerAt apName="AP1"/>
			<Services>
				<ClientServices goose="true" sv="true"/>
			</Services>
		</AccessPoint>
	</IED>
	<IED name="GOOSE_Publisher" desc="GOOSE publisher" manufacturer="Dummy">
		<AccessPoint name="AP1">
			<Server>
				<Authentication/>
				<LDevice inst="QB2_Disconnector" desc="Animalia">
					<LN0 lnClass="LLN0" inst="" lnType="Dummy.LLN0">
						<DataSet name="GOOSE2sDataSet">
							<FCDA ldInst="QB2_Disconnector" prefix="" lnClass="CSWI" lnInst="1" doName="Pos" daName="stVal" fc="ST"/>
							<FCDA ldInst="QB2_Disconnector" prefix="" lnClass="CSWI" lnInst="1" doName="Pos" daName="q" fc="ST"/>
						</DataSet>
						<DataSet name="GOOSE1sDataSet">
							<FCDA ldInst="QB1_Disconnector" prefix="" lnClass="CSWI" lnInst="1" doName="Pos" daName="stVal" fc="ST"/>
							<FCDA ldInst="QB1_Disconnector" prefix="" lnClass="CSWI" lnInst="1" doName="Pos" daName="q" fc="ST"/>
						</DataSet>
						<GSEControl name="GOOSE3" type="GOOSE" appID="GOOSE3" confRev="1" datSet="GOOSE1sDataSet"/>
						<GSEControl name="GOOSE2" type="GOOSE" appID="GOOSE2" confRev="1" datSet="GOOSE2sDataSet"/>
						<GSEControl name="GOOSE1" type="GOOSE" appID="GOOSE1" confRev="1" datSet="GOOSE1sDataSet"/>
					</LN0>
					<LN prefix="" lnClass="CILO" inst="1" lnType="Dummy.CILO" desc="Chordata"/>
					<LN lnClass="CSWI" inst="1" lnType="Dummy.CSWI" desc="Arthropoda"/>
					<LN prefix="" lnClass="XSWI" inst="1" lnType="Dummy.XSWI" desc="Nematoda"/>
				</LDevice>
				<LDevice inst="QB1_Disconnector">
					<LN0 lnClass="LLN0" inst="" lnType="Dummy.LLN0"/>
					<LN prefix="" lnClass="CILO" inst="1" lnType="Dummy.CILO"/>
					<LN prefix="" lnClass="CSWI" inst="1" lnType="Dummy.CSWI"/>
					<LN prefix="" lnClass="XSWI" inst="1" lnType="Dummy.XSWI"/>
				</LDevice>
			</Server>
		</AccessPoint>
		<AccessPoint desc="Process Bus" name="PP1">
			<ServerAt apName="AP1"/>
			<Services>
				<ClientServices goose="true" sv="true"/>
			</Services>
		</AccessPoint>
	</IED>
	<IED name="GOOSE_Publisher2" desc="GOOSE publisher" manufacturer="Dummy">
		<AccessPoint name="AP1">
			<Server>
				<Authentication/>
				<LDevice inst="QB2_Disconnector" desc="Animalia">
					<LN0 lnClass="LLN0" inst="" lnType="Dummy.LLN0">
						<DataSet name="GOOSE2sDataSet">
							<FCDA ldInst="QB2_Disconnector" prefix="" lnClass="CSWI" lnInst="1" doName="Pos" daName="stVal" fc="ST"/>
							<FCDA ldInst="QB2_Disconnector" prefix="" lnClass="CSWI" lnInst="1" doName="Pos" daName="q" fc="ST"/>
						</DataSet>
						<DataSet name="GOOSE1sDataSet">
							<FCDA ldInst="QB1_Disconnector" prefix="" lnClass="CSWI" lnInst="1" doName="Pos" daName="stVal" fc="ST"/>
							<FCDA ldInst="QB1_Disconnector" prefix="" lnClass="CSWI" lnInst="1" doName="Pos" daName="q" fc="ST"/>
						</DataSet>
						<GSEControl name="GOOSE3" type="GOOSE" appID="GOOSE3" confRev="1" datSet="GOOSE1sDataSet"/>
						<GSEControl name="GOOSE2" type="GOOSE" appID="GOOSE2" confRev="1" datSet="GOOSE2sDataSet"/>
						<GSEControl name="GOOSE1" type="GOOSE" appID="GOOSE1" confRev="1" datSet="GOOSE1sDataSet"/>
					</LN0>
					<LN prefix="" lnClass="CILO" inst="1" lnType="Dummy.CILO" desc="Chordata"/>
					<LN lnClass="CSWI" inst="1" lnType="Dummy.CSWI" desc="Arthropoda"/>
					<LN prefix="" lnClass="XSWI" inst="1" lnType="Dummy.XSWI" desc="Nematoda"/>
				</LDevice>
				<LDevice inst="QB1_Disconnector">
					<LN0 lnClass="LLN0" inst="" lnType="Dummy.LLN0"/>
					<LN prefix="" lnClass="CILO" inst="1" lnType="Dummy.CILO"/>
					<LN prefix="" lnClass="CSWI" inst="1" lnType="Dummy.CSWI"/>
					<LN prefix="" lnClass="XSWI" inst="1" lnType="Dummy.XSWI"/>
				</LDevice>
			</Server>
		</AccessPoint>
	</IED>
	<IED name="GOOSE_Subscriber" manufacturer="Dummy">
		<AccessPoint name="AP1">
			<Server>
				<Authentication/>
				<LDevice inst="Earth_Switch">
					<LN0 lnClass="LLN0" inst="" lnType="Dummy.LLN0">
						<Inputs>
							<ExtRef iedName="GOOSE_Publisher" serviceType="GOOSE" ldInst="QB2_Disconnector" lnClass="CSWI" lnInst="1" prefix="" doName="Pos" daName="stVal" srcLDInst="QB2_Disconnector" srcPrefix="" srcLNClass="LLN0" srcCBName="GOOSE2"/>
							<ExtRef iedName="GOOSE_Publisher2" serviceType="GOOSE" ldInst="QB2_Disconnector" lnClass="CSWI" lnInst="1" prefix="" doName="Pos" daName="q" srcLDInst="QB2_Disconnector" srcPrefix="" srcLNClass="LLN0" srcCBName="GOOSE2"/>
						</Inputs>
					</LN0>
					<LN prefix="" lnClass="CILO" inst="1" lnType="Dummy.CILO">
						<Inputs>
							<ExtRef iedName="SomethingNotPresent" intAddr="Pos;CSWI1/Pos/stVal" desc="Missing IED" serviceType="GOOSE" ldInst="QB2_Disconnector" lnClass="CSWI" lnInst="1" prefix="" doName="Pos" daName="stVal" srcLDInst="QB2_Disconnector" srcPrefix="" srcLNClass="LLN0" srcCBName="GOOSE2"/>
							<ExtRef iedName="GOOSE_Publisher" intAddr="Pos;CSWI1/Pos/q" desc="Missing attributes" serviceType="GOOSE" ldInst="QB2_Disconnector" lnClass="CSWI" lnInst="1" prefix="" daName="q" srcPrefix="" srcLNClass="LLN0" srcCBName="GOOSE2"/>
						</Inputs>
					</LN>
					<LN prefix="" lnClass="CSWI" inst="1" lnType="Dummy.CSWI">
						<Inputs>
							<ExtRef iedName="GOOSE_Publisher" serviceType="GOOSE" ldInst="QB2_Disconnector" lnClass="CSWI" lnInst="1" prefix="" doName="Pos" daName="stVal" srcLDInst="QB2_Disconnector" srcPrefix="" srcLNClass="LLN0" srcCBName="GOOSE2" intAddr="Pos;CSWI1/Pos/stVal" desc="Interlocking.Input2"/>
							<ExtRef iedName="GOOSE_Publisher" serviceType="GOOSE" ldInst="QB2_Disconnector" lnClass="CSWI" lnInst="1" prefix="" doName="Pos" daName="q" srcLDInst="QB2_Disconnector" srcPrefix="" srcLNClass="LLN0" srcCBName="GOOSE2DoesNotExist" intAddr="Pos;CSWI1/Pos/q" desc="Interlocking.Input2"/>
							<ExtRef intAddr="someRestrictedExtRef" desc="Restricted To Pos" pLN="CSWI" pDO="Pos" pDA="stVal" pServT="GOOSE"/>
						</Inputs>
					</LN>
					<LN prefix="" lnClass="XSWI" inst="1" lnType="Dummy.XSWI"/>
				</LDevice>
			</Server>
		</AccessPoint>
		<AccessPoint desc="Process Bus" name="PP1">
			<ServerAt apName="AP1"/>
			<Services>
				<ClientServices goose="true" sv="true"/>
			</Services>
		</AccessPoint>
	</IED>
	<IED xmlns="http://www.iec.ch/61850/2003/SCL" name="SMV_Subscriber" manufacturer="Dummy">
		<Services>
			<SupSubscription maxSv="4" maxGo="0"/>
		</Services>
		<AccessPoint name="AP1">
			<Server>
				<Authentication/>
				<LDevice inst="Overvoltage">
					<LN0 lnClass="LLN0" inst="" lnType="Dummy.LLN0"/>
					<LN prefix="" lnClass="PTRC" inst="1" lnType="Summy.PTRC">
						<Inputs>
							<ExtRef intAddr="AmpSv;TCTR1/AmpSv/instMag.i" desc="MeasPoint.CT1"/>
							<ExtRef intAddr="AmpSv;TCTR1/AmpSv/q" desc="MeasPoint.CT1"/>
							<ExtRef intAddr="AmpSv;TCTR2/AmpSv/instMag.i" desc="MeasPoint.CT2" iedName="SMV_Publisher" ldInst="CurrentTransformer" prefix="L3" lnClass="TCTR" lnInst="3" doName="AmpSv" daName="instMag.i" srcLDInst="CurrentTransformer" srcPrefix="NoMatch" srcLNClass="LLN0" srcCBName="fullSmv" serviceType="SMV"/>
							<ExtRef intAddr="AmpSv;TCTR2/AmpSv/q" desc="MeasPoint.CT1"/>
							<ExtRef intAddr="AmpSv;TCTR3/AmpSv/instMag.i" desc="MeasPoint.CT3" iedName="SMV_Publisher" ldInst="CurrentTransformer" prefix="L3" lnClass="TCTR" lnInst="3" doName="AmpSv" daName="instMag.i" srcLDInst="CurrentTransformer" srcPrefix="" srcLNClass="LLN0" srcCBName="fullSmv" serviceType="SMV"/>
							<ExtRef intAddr="AmpSv;TCTR3/AmpSv/q" desc="MeasPoint.CT1" serviceType="SMV" iedName="SMV_Publisher" ldInst="CurrentTransformer" prefix="L3" lnClass="TCTR" lnInst="3" doName="AmpSv" daName="q" srcLDInst="CurrentTransformer" srcPrefix="" srcLNClass="LLN0" srcCBName="fullSmv"/>
							<ExtRef intAddr="sillyLikeA" serviceType="GOOSE"/>
						</Inputs>
					</LN>
				</LDevice>
				<LDevice inst="Overcurrent">
					<LN0 lnClass="LLN0" inst="" lnType="Dummy.LLN0"/>
					<LN prefix="" lnClass="PTRC" inst="1" lnType="Summy.PTRC">
						<Inputs>
							<ExtRef intAddr="VolSv;TVTR1/VolSv/instMag.i" desc="MeasPoint.VT1" serviceType="SMV"/>
							<ExtRef intAddr="VolSv;TVTR1/VolSv/q" desc="MeasPoint.VT1"/>
							<ExtRef intAddr="VolSv;TVTR2/VolSv/instMag.i" desc="MeasPoint.VT2"/>
							<ExtRef intAddr="VolSv;TVTR2/VolSv/q" desc="MeasPoint.VT1"/>
							<ExtRef intAddr="VolSv;TVTR3/VolSv/instMag.i" desc="MeasPoint.VT3"/>
							<ExtRef intAddr="VolSv;TVTR3/VolSv/q" desc="MeasPoint.VT1"/>
							<ExtRef intAddr="someRestrictedExtRef" desc="Restricted To AmpSV" pLN="TCTR" pDO="AmpSV" pDA="instMag.i"/>
						</Inputs>
					</LN>
				</LDevice>
				<LDevice inst="SV_supervision">
					<LN0 lnClass="LLN0" inst="" lnType="Dummy.LLN0"/>
					<LN lnClass="LSVS" inst="1" lnType="Dummy.LSVS">
						<DOI name="SvCBRef">
							<DAI name="setSrcRef">
								<Val>SMV_Publisher2CurrentTransformer/LLN0.fullSmv</Val>
							</DAI>
						</DOI>
					</LN>
					<LN lnClass="LSVS" inst="2" lnType="Dummy.LSVS">
						<Private type="OpenSCD.create"/>
						<DOI name="SvCBRef">
							<DAI name="setSrcRef">
								<Val>SMV_Publisher2CurrentTransformer/LLN0.voltageOnly</Val>
							</DAI>
						</DOI>
					</LN>
					<LN lnClass="LSVS" lnType="Dummy.LSVS" inst="3">
						<Private type="OpenSCD.create"/>
						<DOI name="SvCBRef">
							<DAI name="setSrcRef">
								<Val>SMV_PublisherCurrentTransformer/LLN0.fullSmv</Val>
							</DAI>
						</DOI>
					</LN>
				</LDevice>
			</Server>
		</AccessPoint>
		<AccessPoint desc="Process Bus" name="PP1">
			<ServerAt apName="AP1"/>
			<Services>
				<ClientServices goose="true" sv="true"/>
			</Services>
		</AccessPoint>
	</IED>
	<DataTypeTemplates>
		<LNodeType lnClass="PTRC" id="Summy.PTRC" desc="Trip conditioning: General trip signal">
			<DO name="Mod" type="OpenSCD_ENC_Mod"/>
			<DO name="Beh" type="OpenSCD_ENS_Beh"/>
			<DO name="Health" type="OpenSCD_ENS_Health"/>
			<DO name="NamPlt" type="OpenSCD_LPL_noLD"/>
			<DO name="Tr" type="OpenSCD_ACT_general"/>
			<DO name="Op" transient="true" type="OpenSCD_ACT_general"/>
			<DO name="Str" type="OpenSCD_ACD_general"/>
		</LNodeType>
		<LNodeType lnClass="LSVS" id="Dummy.LSVS">
			<DO name="SvCBRef" type="Dummy.ORG"/>
			<DO name="St" type="OpenSCD_SPS_simple"/>
			<DO name="Mod" type="OpenSCD_ENC_Mod"/>
			<DO name="Health" type="OpenSCD_ENS_Health"/>
			<DO name="Beh" type="OpenSCD_ENS_Beh"/>
			<DO name="NamPlt" type="OpenSCD_LPL_noLD"/>
		</LNodeType>
		<LNodeType lnClass="TCTR" id="Dummy.TCTR" desc="Current transformer">
			<DO name="Rat" type="Dummy.ASG"/>
			<DO name="ARtgSec" type="Dummy.ING"/>
			<DO name="ARtgNom" type="OpenSCD_ASG_ATrg_TCTR"/>
			<DO name="Mod" type="OpenSCD_ENC_Mod"/>
			<DO name="Beh" type="OpenSCD_ENS_Beh"/>
			<DO name="Health" type="OpenSCD_ENS_Health"/>
			<DO name="NamPlt" type="OpenSCD_LPL_noLD"/>
			<DO name="AmpSv" type="OpenSCD_SAV_AmpSv_TCTR"/>
			<DO name="ARtg" type="OpenSCD_ASG_ATrg_TCTR"/>
			<DO name="HzRtg" type="OpenSCD_ASG_HzRtg_TCTR"/>
		</LNodeType>
		<LNodeType lnClass="TVTR" id="Dummy.TVTR" desc="Voltage transformer">
			<DO name="Rat" type="Dummy.ASG"/>
			<DO name="VRtgSec" type="Dummy.ING"/>
			<DO name="Mod" type="OpenSCD_ENC_Mod"/>
			<DO name="Beh" type="OpenSCD_ENS_Beh"/>
			<DO name="Health" type="OpenSCD_ENS_Health"/>
			<DO name="NamPlt" type="OpenSCD_LPL_noLD"/>
			<DO name="VolSv" type="OpenSCD_SAV_VolSv_TVTR"/>
			<DO name="VRtg" type="OpenSCD_ASG_VRtg_TVTR"/>
			<DO name="HzRtg" type="OpenSCD_ASG_HzRtg_TCTR"/>
		</LNodeType>
		<LNodeType lnClass="LGOS" id="Dummy.LGOS">
			<DO name="GoCBRef" type="Dummy.ORG"/>
			<DO name="St" type="OpenSCD_SPS_simple"/>
			<DO name="Mod" type="OpenSCD_ENC_Mod"/>
			<DO name="Health" type="OpenSCD_ENS_Health"/>
			<DO name="Beh" type="OpenSCD_ENS_Beh"/>
			<DO name="NamPlt" type="OpenSCD_LPL_noLD"/>
		</LNodeType>
		<LNodeType lnClass="LGOS" id="Dummy.LGOS1">
			<DO name="GoCBRef" type="Dummy.ORG1"/>
			<DO name="LikeGoCBRef" type="Dummy.ORG1"/>
			<DO name="St" type="OpenSCD_SPS_simple"/>
			<DO name="Mod" type="OpenSCD_ENC_Mod"/>
			<DO name="Health" type="OpenSCD_ENS_Health"/>
			<DO name="Beh" type="OpenSCD_ENS_Beh"/>
			<DO name="NamPlt" type="OpenSCD_LPL_noLD"/>
		</LNodeType>
		<LNodeType lnClass="LGOS" id="Dummy.LGOS2">
			<DO name="GoCBRef" type="Dummy.ORG2"/>
			<DO name="St" type="OpenSCD_SPS_simple"/>
			<DO name="Mod" type="OpenSCD_ENC_Mod"/>
			<DO name="Health" type="OpenSCD_ENS_Health"/>
			<DO name="Beh" type="OpenSCD_ENS_Beh"/>
			<DO name="NamPlt" type="OpenSCD_LPL_noLD"/>
		</LNodeType>
		<LNodeType lnClass="XSWI" id="Dummy.XSWI" desc="Switch: one phase represenation">
			<DO name="Mod" type="OpenSCD_ENC_Mod"/>
			<DO name="Beh" type="OpenSCD_ENS_Beh"/>
			<DO name="Health" type="OpenSCD_ENS_Health"/>
			<DO name="NamPlt" type="OpenSCD_LPL_noLD"/>
			<DO name="LocKey" type="OpenSCD_SPS_simple"/>
			<DO name="Loc" type="OpenSCD_SPS_simple"/>
			<DO name="OpCnt" type="OpenSCD_INS_simple"/>
			<DO name="Pos" type="OpenSCD_DPC_statusonly"/>
			<DO name="BlkOpn" type="OpenSCD_SPC_statusonly"/>
			<DO name="BlkCls" type="OpenSCD_SPC_statusonly"/>
			<DO name="SwTyp" type="OpenSCD_ENS_SwTyp"/>
		</LNodeType>
		<LNodeType lnClass="CSWI" id="Dummy.CSWI" desc="Switch control: no process bus(PB)">
			<DO name="Mod" type="OpenSCD_ENC_Mod"/>
			<DO name="Beh" type="OpenSCD_ENS_Beh"/>
			<DO name="Health" type="OpenSCD_ENS_Health"/>
			<DO name="NamPlt" type="OpenSCD_LPL_noLD"/>
			<DO name="LocKey" type="OpenSCD_SPS_simple"/>
			<DO name="Loc" type="OpenSCD_SPS_simple"/>
			<DO name="Pos" type="OpenSCD_DPC"/>
		</LNodeType>
		<LNodeType lnClass="CILO" id="Dummy.CILO" desc="Interlocking">
			<DO name="Mod" type="OpenSCD_ENC_Mod"/>
			<DO name="Beh" type="OpenSCD_ENS_Beh"/>
			<DO name="Health" type="OpenSCD_ENS_Health"/>
			<DO name="NamPlt" type="OpenSCD_LPL_noLD"/>
			<DO name="EnaOpn" type="OpenSCD_SPS_simple"/>
			<DO name="EnaCls" type="OpenSCD_SPS_simple"/>
		</LNodeType>
		<LNodeType lnClass="LLN0" id="Dummy.LLN0" desc="Logical device LN: parent">
			<DO name="Mod" type="OpenSCD_ENC_Mod"/>
			<DO name="Beh" type="OpenSCD_ENS_Beh"/>
			<DO name="Health" type="OpenSCD_ENS_Health"/>
			<DO name="NamPlt" type="OpenSCD_LPL_LD"/>
			<DO name="LocKey" type="OpenSCD_SPS_simple"/>
			<DO name="Loc" type="OpenSCD_SPS_simple"/>
		</LNodeType>
		<DOType cdc="ACT" id="OpenSCD_ACT_general">
			<DA name="general" bType="BOOLEAN" dchg="true" fc="ST"/>
			<DA name="q" bType="Quality" qchg="true" fc="ST"/>
			<DA name="t" bType="Timestamp" fc="ST"/>
		</DOType>
		<DOType cdc="ACD" id="OpenSCD_ACD_general">
			<DA name="general" bType="BOOLEAN" dchg="true" fc="ST"/>
			<DA name="dirGeneral" bType="Enum" dchg="true" type="FaultDirectionKind" fc="ST"/>
			<DA name="q" bType="Quality" qchg="true" fc="ST"/>
			<DA name="t" bType="Timestamp" fc="ST"/>
		</DOType>
		<DOType cdc="SAV" id="OpenSCD_SAV_AmpSv_TCTR">
			<DA name="instMag" bType="Struct" type="OpenSCD_AnalogueValue_INT32" fc="MX"/>
			<DA name="q" bType="Quality" qchg="true" fc="MX"/>
			<DA name="t" bType="Timestamp" fc="MX"/>
			<DA name="units" bType="Struct" dchg="true" type="Unit" fc="CF"/>
			<DA name="sVC" bType="Struct" dchg="true" type="OpenSCD_ScaledValueConfig_AmpSv" fc="CF"/>
		</DOType>
		<DOType cdc="ASG" id="OpenSCD_ASG_ATrg_TCTR">
			<DA name="setMag" bType="Struct" type="Dummy.AnVal32" fc="SP"/>
			<DA name="units" bType="Struct" dchg="true" type="OpenSCD_Unit_A" fc="CF"/>
			<DA name="q" bType="Quality" qchg="true" fc="ST"/>
			<DA name="t" bType="Timestamp" fc="ST"/>
		</DOType>
		<DOType cdc="ASG" id="OpenSCD_ASG_HzRtg_TCTR">
			<DA name="setMag" bType="Struct" type="OpenSCD_AnalogueValue_INT32" fc="SP"/>
			<DA name="units" bType="Struct" dchg="true" type="OpenSCD_Unit_Hz" fc="CF"/>
			<DA name="sVC" bType="Struct" dchg="true" type="ScaledValueConfig" fc="CF"/>
			<DA name="q" bType="Quality" qchg="true" fc="ST"/>
			<DA name="t" bType="Timestamp" fc="ST"/>
		</DOType>
		<DOType cdc="SAV" id="OpenSCD_SAV_VolSv_TVTR">
			<DA name="instMag" bType="Struct" type="OpenSCD_AnalogueValue_INT32" fc="MX"/>
			<DA name="q" bType="Quality" qchg="true" fc="MX"/>
			<DA name="t" bType="Timestamp" fc="MX"/>
			<DA name="units" bType="Struct" dchg="true" type="Unit" fc="CF"/>
			<DA name="sVC" bType="Struct" dchg="true" type="OpenSCD_ScaledValueConfig_VolSv" fc="CF"/>
		</DOType>
		<DOType cdc="ASG" id="OpenSCD_ASG_VRtg_TVTR">
			<DA name="setMag" bType="Struct" type="Dummy.AnVal32" fc="SP"/>
			<DA name="units" bType="Struct" dchg="true" type="OpenSCD_Unit_V" fc="CF"/>
			<DA name="q" bType="Quality" qchg="true" fc="ST"/>
			<DA name="t" bType="Timestamp" fc="ST"/>
		</DOType>
		<DOType cdc="ING" id="Dummy.ING">
			<DA name="setVal" bType="INT32" dchg="true" fc="SP"/>
			<DA name="q" bType="Quality" qchg="true" fc="ST"/>
			<DA name="t" bType="Timestamp" fc="ST"/>
			<DA name="d" bType="VisString255" fc="DC"/>
		</DOType>
		<DOType id="Dummy.ASG" cdc="ASG">
			<DA name="setMag" bType="Struct" type="Dummy.AnVal32" fc="SP" dchg="true"/>
			<DA name="q" bType="Quality" fc="SP" qchg="true"/>
			<DA name="t" bType="Timestamp" fc="SP"/>
		</DOType>
		<DOType cdc="ORG" id="Dummy.ORG">
			<DA name="setSrcRef" bType="ObjRef" dchg="true" valKind="RO" valImport="true" fc="SP"/>
		</DOType>
		<DOType cdc="ORG" id="Dummy.ORG1">
			<DA name="setSrcRef" bType="ObjRef" dchg="true" valKind="Conf" valImport="true" fc="SP"/>
		</DOType>
		<DOType cdc="ORG" id="Dummy.ORG2">
			<DA name="setSrcRef" bType="ObjRef" dchg="true" fc="SP"/>
		</DOType>
		<DOType cdc="ENS" id="OpenSCD_ENS_SwTyp">
			<DA fc="ST" dchg="true" name="stVal" bType="Enum" type="SwitchFunctionKind"/>
			<DA fc="ST" qchg="true" name="q" bType="Quality"/>
			<DA fc="ST" name="t" bType="Timestamp"/>
		</DOType>
		<DOType cdc="SPC" id="OpenSCD_SPC_statusonly">
			<DA name="stVal" bType="BOOLEAN" dchg="true" fc="ST"/>
			<DA name="q" bType="Quality" qchg="true" fc="ST"/>
			<DA name="t" bType="Timestamp" fc="ST"/>
			<DA name="ctlModel" bType="Enum" dchg="true" type="OpenSCD_StatusOnly" fc="CF">
				<Val>status-only</Val>
			</DA>
		</DOType>
		<DOType cdc="DPC" id="OpenSCD_DPC_statusonly">
			<DA name="stVal" bType="Dbpos" dchg="true" fc="ST"/>
			<DA name="q" bType="Quality" qchg="true" fc="ST"/>
			<DA name="t" bType="Timestamp" fc="ST"/>
			<DA name="ctlModel" bType="Enum" fc="CF" type="OpenSCD_StatusOnly">
				<Val>status-only</Val>
			</DA>
		</DOType>
		<DOType cdc="INS" id="OpenSCD_INS_simple">
			<DA name="stVal" bType="INT32" dchg="true" fc="ST"/>
			<DA name="q" bType="Quality" qchg="true" fc="ST"/>
			<DA name="t" bType="Timestamp" fc="ST"/>
			<DA name="d" bType="VisString255" fc="DC"/>
		</DOType>
		<DOType cdc="DPC" id="OpenSCD_DPC">
			<DA name="origin" bType="Struct" dchg="true" fc="ST" type="OpenSCD_Originator"/>
			<DA name="stVal" bType="Dbpos" dchg="true" fc="ST"/>
			<DA name="q" bType="Quality" qchg="true" fc="ST"/>
			<DA name="t" bType="Timestamp" fc="ST"/>
			<DA name="ctlModel" bType="Enum" fc="CF" type="CtlModelKind">
				<Val>sbo-with-enhanced-security</Val>
			</DA>
			<DA name="sboTimeout" bType="INT32U" fc="CF">
				<Val>30000</Val>
			</DA>
			<DA name="operTimeout" bType="INT32U" fc="CF">
				<Val>600</Val>
			</DA>
			<DA name="pulseConfig" bType="Struct" fc="CO" type="OpenSCD_PulseConfig"/>
			<DA name="SBOw" bType="Struct" fc="CO" type="OpenSCD_OperSBOw_Dbpos"/>
			<DA name="Oper" bType="Struct" fc="CO" type="OpenSCD_OperSBOw_Dbpos"/>
			<DA name="Cancel" bType="Struct" fc="CO" type="OpenSCD_Cancel_Dbpos"/>
		</DOType>
		<DOType cdc="LPL" id="OpenSCD_LPL_noLD">
			<DA name="vendor" bType="VisString255" fc="DC"/>
			<DA name="swRev" bType="VisString255" fc="DC"/>
			<DA name="d" bType="VisString255" fc="DC"/>
			<DA name="configRev" bType="VisString255" fc="DC"/>
		</DOType>
		<DOType cdc="SPS" id="OpenSCD_SPS_simple">
			<DA name="stVal" bType="BOOLEAN" dchg="true" fc="ST"/>
			<DA name="q" bType="Quality" qchg="true" fc="ST"/>
			<DA name="t" bType="Timestamp" fc="ST"/>
			<DA name="d" bType="VisString255" fc="DC"/>
		</DOType>
		<DOType cdc="LPL" id="OpenSCD_LPL_LD">
			<DA name="vendor" bType="VisString255" fc="DC"/>
			<DA name="swRev" bType="VisString255" fc="DC"/>
			<DA name="d" bType="VisString255" fc="DC"/>
			<DA name="configRev" bType="VisString255" fc="DC"/>
			<DA name="ldNs" bType="VisString255" fc="EX">
				<Val>IEC 61850-7-4:2007B4</Val>
			</DA>
		</DOType>
		<DOType cdc="ENS" id="OpenSCD_ENS_Health">
			<DA name="stVal" bType="Enum" dchg="true" fc="ST" type="HealthKind"/>
			<DA name="q" bType="Quality" qchg="true" fc="ST"/>
			<DA name="t" bType="Timestamp" fc="ST"/>
		</DOType>
		<DOType cdc="ENS" id="OpenSCD_ENS_Beh">
			<DA name="stVal" bType="Enum" dchg="true" fc="ST" type="BehaviourModeKind"/>
			<DA name="q" bType="Quality" qchg="true" fc="ST"/>
			<DA name="t" bType="Timestamp" fc="ST"/>
		</DOType>
		<DOType cdc="ENC" id="OpenSCD_ENC_Mod">
			<DA name="origin" bType="Struct" dchg="true" fc="ST" type="OpenSCD_Originator"/>
			<DA name="stVal" bType="Enum" dchg="true" fc="ST" type="BehaviourModeKind"/>
			<DA name="q" bType="Quality" qchg="true" fc="ST"/>
			<DA name="t" bType="Timestamp" fc="ST"/>
			<DA name="ctlModel" bType="Enum" fc="CF" type="CtlModelKind">
				<Val>sbo-with-enhanced-security</Val>
			</DA>
			<DA name="sboTimeout" bType="INT32U" fc="CF">
				<Val>30000</Val>
			</DA>
			<DA name="operTimeout" bType="INT32U" fc="CF">
				<Val>600</Val>
			</DA>
			<DA name="SBOw" bType="Struct" fc="CO" type="OpenSCD_OperSBOw_BehaviourModeKind"/>
			<DA name="Oper" bType="Struct" fc="CO" type="OpenSCD_OperSBOw_BehaviourModeKind"/>
			<DA name="Cancel" bType="Struct" fc="CO" type="OpenSCD_Cancel_BehaviourModeKind"/>
		</DOType>
		<DAType id="OpenSCD_AnalogueValue_INT32">
			<BDA name="i" bType="INT32"/>
		</DAType>
		<DAType id="Unit">
			<BDA name="SIUnit" bType="Enum" type="SIUnitKind"/>
			<BDA name="multiplier" bType="Enum" type="MultiplierKind"/>
		</DAType>
		<DAType id="OpenSCD_ScaledValueConfig_AmpSv">
			<BDA name="scaleFactor" bType="FLOAT32">
				<Val>0.001</Val>
			</BDA>
			<BDA name="offset" bType="FLOAT32">
				<Val>0</Val>
			</BDA>
		</DAType>
		<DAType id="OpenSCD_Unit_A">
			<BDA name="SIUnit" bType="Enum" type="SIUnitKind">
				<Val>A</Val>
			</BDA>
		</DAType>
		<DAType id="ScaledValueConfig">
			<BDA name="scaleFactor" bType="FLOAT32"/>
			<BDA name="offset" bType="FLOAT32"/>
		</DAType>
		<DAType id="OpenSCD_Unit_Hz">
			<BDA name="SIUnit" bType="Enum" type="SIUnitKind">
				<Val>Hz</Val>
			</BDA>
		</DAType>
		<DAType id="OpenSCD_ScaledValueConfig_VolSv">
			<BDA name="scaleFactor" bType="FLOAT32">
				<Val>0.01</Val>
			</BDA>
			<BDA name="offset" bType="FLOAT32">
				<Val>0</Val>
			</BDA>
		</DAType>
		<DAType id="OpenSCD_Unit_V">
			<BDA name="SIUnit" bType="Enum" type="SIUnitKind">
				<Val>A</Val>
			</BDA>
		</DAType>
		<DAType id="Dummy.AnVal32">
			<BDA name="f" bType="FLOAT32"/>
		</DAType>
		<DAType id="OpenSCD_Cancel_Dbpos">
			<BDA name="ctlVal" bType="Dbpos"/>
			<BDA name="origin" bType="Struct" type="OpenSCD_Originator"/>
			<BDA name="ctlNum" bType="INT8U"/>
			<BDA name="T" bType="Timestamp"/>
			<BDA name="Test" bType="BOOLEAN"/>
			<ProtNs type="8-MMS">IEC 61850-8-1:2003</ProtNs>
		</DAType>
		<DAType id="OpenSCD_OperSBOw_Dbpos">
			<BDA name="ctlVal" bType="Dbpos"/>
			<BDA name="origin" bType="Struct" type="OpenSCD_Originator"/>
			<BDA name="ctlNum" bType="INT8U"/>
			<BDA name="T" bType="Timestamp"/>
			<BDA name="Test" bType="BOOLEAN"/>
			<BDA name="Check" bType="Check"/>
			<ProtNs type="8-MMS">IEC 61850-8-1:2003</ProtNs>
		</DAType>
		<DAType id="OpenSCD_PulseConfig">
			<BDA name="cmdQual" bType="Enum" type="OutputSignalKind"/>
			<BDA name="onDur" bType="INT32U"/>
			<BDA name="offDur" bType="INT32U"/>
			<BDA name="numPls" bType="INT32U"/>
		</DAType>
		<DAType id="OpenSCD_Cancel_BehaviourModeKind">
			<BDA name="ctlVal" bType="Enum" type="BehaviourModeKind"/>
			<BDA name="origin" bType="Struct" type="OpenSCD_Originator"/>
			<BDA name="ctlNum" bType="INT8U"/>
			<BDA name="T" bType="Timestamp"/>
			<BDA name="Test" bType="BOOLEAN"/>
			<ProtNs type="8-MMS">IEC 61850-8-1:2003</ProtNs>
		</DAType>
		<DAType id="OpenSCD_OperSBOw_BehaviourModeKind">
			<BDA name="ctlVal" bType="Enum" type="BehaviourModeKind"/>
			<BDA name="origin" bType="Struct" type="OpenSCD_Originator"/>
			<BDA name="ctlNum" bType="INT8U"/>
			<BDA name="T" bType="Timestamp"/>
			<BDA name="Test" bType="BOOLEAN"/>
			<BDA name="Check" bType="Check"/>
			<ProtNs type="8-MMS">IEC 61850-8-1:2003</ProtNs>
		</DAType>
		<DAType id="OpenSCD_Originator">
			<BDA name="orCat" bType="Enum" type="OriginatorCategoryKind"/>
			<BDA name="orIdent" bType="Octet64"/>
		</DAType>
		<EnumType id="FaultDirectionKind">
			<EnumVal ord="0">unknown</EnumVal>
			<EnumVal ord="1">forward</EnumVal>
			<EnumVal ord="2">backward</EnumVal>
			<EnumVal ord="3">both</EnumVal>
		</EnumType>
		<EnumType id="SIUnitKind">
			<EnumVal ord="1"/>
			<EnumVal ord="2">m</EnumVal>
			<EnumVal ord="3">kg</EnumVal>
			<EnumVal ord="4">s</EnumVal>
			<EnumVal ord="5">A</EnumVal>
			<EnumVal ord="6">K</EnumVal>
			<EnumVal ord="7">mol</EnumVal>
			<EnumVal ord="8">cd</EnumVal>
			<EnumVal ord="9">deg</EnumVal>
			<EnumVal ord="10">rad</EnumVal>
			<EnumVal ord="11">sr</EnumVal>
			<EnumVal ord="21">Gy</EnumVal>
			<EnumVal ord="22">Bq</EnumVal>
			<EnumVal ord="23">°C</EnumVal>
			<EnumVal ord="24">Sv</EnumVal>
			<EnumVal ord="25">F</EnumVal>
			<EnumVal ord="26">C</EnumVal>
			<EnumVal ord="27">S</EnumVal>
			<EnumVal ord="28">H</EnumVal>
			<EnumVal ord="29">V</EnumVal>
			<EnumVal ord="30">ohm</EnumVal>
			<EnumVal ord="31">J</EnumVal>
			<EnumVal ord="32">N</EnumVal>
			<EnumVal ord="33">Hz</EnumVal>
			<EnumVal ord="34">lx</EnumVal>
			<EnumVal ord="35">Lm</EnumVal>
			<EnumVal ord="36">Wb</EnumVal>
			<EnumVal ord="37">T</EnumVal>
			<EnumVal ord="38">W</EnumVal>
			<EnumVal ord="39">Pa</EnumVal>
			<EnumVal ord="41">m²</EnumVal>
			<EnumVal ord="42">m³</EnumVal>
			<EnumVal ord="43">m/s</EnumVal>
			<EnumVal ord="44">m/s²</EnumVal>
			<EnumVal ord="45">m³/s</EnumVal>
			<EnumVal ord="46">m/m³</EnumVal>
			<EnumVal ord="47">M</EnumVal>
			<EnumVal ord="48">kg/m³</EnumVal>
			<EnumVal ord="49">m²/s</EnumVal>
			<EnumVal ord="50">W/m K</EnumVal>
			<EnumVal ord="51">J/K</EnumVal>
			<EnumVal ord="52">ppm</EnumVal>
			<EnumVal ord="53">1/s</EnumVal>
			<EnumVal ord="54">rad/s</EnumVal>
			<EnumVal ord="55">W/m²</EnumVal>
			<EnumVal ord="56">J/m²</EnumVal>
			<EnumVal ord="57">S/m</EnumVal>
			<EnumVal ord="58">K/s</EnumVal>
			<EnumVal ord="59">Pa/s</EnumVal>
			<EnumVal ord="60">J/kg K</EnumVal>
			<EnumVal ord="61">VA</EnumVal>
			<EnumVal ord="62">Watts</EnumVal>
			<EnumVal ord="63">VAr</EnumVal>
			<EnumVal ord="64">phi</EnumVal>
			<EnumVal ord="65">cos(phi)</EnumVal>
			<EnumVal ord="66">Vs</EnumVal>
			<EnumVal ord="67">V²</EnumVal>
			<EnumVal ord="68">As</EnumVal>
			<EnumVal ord="69">A²</EnumVal>
			<EnumVal ord="70">A²t</EnumVal>
			<EnumVal ord="71">VAh</EnumVal>
			<EnumVal ord="72">Wh</EnumVal>
			<EnumVal ord="73">VArh</EnumVal>
			<EnumVal ord="74">V/Hz</EnumVal>
			<EnumVal ord="75">Hz/s</EnumVal>
			<EnumVal ord="76">char</EnumVal>
			<EnumVal ord="77">char/s</EnumVal>
			<EnumVal ord="78">kgm²</EnumVal>
			<EnumVal ord="79">dB</EnumVal>
			<EnumVal ord="80">J/Wh</EnumVal>
			<EnumVal ord="81">W/s</EnumVal>
			<EnumVal ord="82">l/s</EnumVal>
			<EnumVal ord="83">dBm</EnumVal>
			<EnumVal ord="84">h</EnumVal>
			<EnumVal ord="85">min</EnumVal>
			<EnumVal ord="86">Ohm/m</EnumVal>
			<EnumVal ord="87">percent/s</EnumVal>
		</EnumType>
		<EnumType id="MultiplierKind">
			<EnumVal ord="-24">y</EnumVal>
			<EnumVal ord="-21">z</EnumVal>
			<EnumVal ord="-18">a</EnumVal>
			<EnumVal ord="-15">f</EnumVal>
			<EnumVal ord="-12">p</EnumVal>
			<EnumVal ord="-9">n</EnumVal>
			<EnumVal ord="-6">µ</EnumVal>
			<EnumVal ord="-3">m</EnumVal>
			<EnumVal ord="-2">c</EnumVal>
			<EnumVal ord="-1">d</EnumVal>
			<EnumVal ord="0"/>
			<EnumVal ord="1">da</EnumVal>
			<EnumVal ord="2">h</EnumVal>
			<EnumVal ord="3">k</EnumVal>
			<EnumVal ord="6">M</EnumVal>
			<EnumVal ord="9">G</EnumVal>
			<EnumVal ord="12">T</EnumVal>
			<EnumVal ord="15">P</EnumVal>
			<EnumVal ord="18">E</EnumVal>
			<EnumVal ord="21">Z</EnumVal>
			<EnumVal ord="24">Y</EnumVal>
		</EnumType>
		<EnumType id="SwitchFunctionKind">
			<EnumVal ord="1">Load Break</EnumVal>
			<EnumVal ord="2">Disconnector</EnumVal>
			<EnumVal ord="3">Earthing Switch</EnumVal>
			<EnumVal ord="4">High Speed Earthing Switch</EnumVal>
		</EnumType>
		<EnumType id="OpenSCD_StatusOnly">
			<EnumVal ord="0">status-only</EnumVal>
		</EnumType>
		<EnumType id="OutputSignalKind">
			<EnumVal ord="0">pulse</EnumVal>
			<EnumVal ord="1">persistent</EnumVal>
			<EnumVal ord="2">persistent-feedback</EnumVal>
		</EnumType>
		<EnumType id="HealthKind">
			<EnumVal ord="1">Ok</EnumVal>
			<EnumVal ord="2">Warning</EnumVal>
			<EnumVal ord="3">Alarm</EnumVal>
		</EnumType>
		<EnumType id="CtlModelKind">
			<EnumVal ord="0">status-only</EnumVal>
			<EnumVal ord="1">direct-with-normal-security</EnumVal>
			<EnumVal ord="2">sbo-with-normal-security</EnumVal>
			<EnumVal ord="3">direct-with-enhanced-security</EnumVal>
			<EnumVal ord="4">sbo-with-enhanced-security</EnumVal>
		</EnumType>
		<EnumType id="BehaviourModeKind">
			<EnumVal ord="1">on</EnumVal>
			<EnumVal ord="2">blocked</EnumVal>
			<EnumVal ord="3">test</EnumVal>
			<EnumVal ord="4">test/blocked</EnumVal>
			<EnumVal ord="5">off</EnumVal>
		</EnumType>
		<EnumType id="OriginatorCategoryKind">
			<EnumVal ord="0">not-supported</EnumVal>
			<EnumVal ord="1">bay-control</EnumVal>
			<EnumVal ord="2">station-control</EnumVal>
			<EnumVal ord="3">remote-control</EnumVal>
			<EnumVal ord="4">automatic-bay</EnumVal>
			<EnumVal ord="5">automatic-station</EnumVal>
			<EnumVal ord="6">automatic-remote</EnumVal>
			<EnumVal ord="7">maintenance</EnumVal>
			<EnumVal ord="8">process</EnumVal>
		</EnumType>
	</DataTypeTemplates>
</SCL>`;
